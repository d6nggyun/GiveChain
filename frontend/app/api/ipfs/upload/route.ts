// app/api/ipfs/upload/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Node 런타임 사용

export async function POST(request: Request) {
  try {
    const jwt = process.env.PINATA_JWT;
    const gatewayBase = process.env.PINATA_GATEWAY ?? "https://gateway.pinata.cloud/ipfs";

    if (!jwt) {
      console.error("[IPFS] PINATA_JWT is not set");
      return NextResponse.json(
        { message: "Server IPFS config not set" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ message: "file is required" }, { status: 400 });
    }

    // Pinata로 보낼 FormData
    const pinataForm = new FormData();
    pinataForm.append("file", file);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body: pinataForm,
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[IPFS] Pinata error:", text);
      return NextResponse.json(
        { message: "Failed to upload to IPFS", detail: text },
        { status: 500 }
      );
    }

    const data = await res.json() as { IpfsHash: string };

    const cid = data.IpfsHash;
    const ipfsUrl = `${gatewayBase}/${cid}`;

    return NextResponse.json({ cid, url: ipfsUrl }, { status: 200 });
  } catch (e) {
    console.error("[IPFS] Unexpected error:", e);
    return NextResponse.json(
      { message: "Unexpected server error" },
      { status: 500 }
    );
  }
}