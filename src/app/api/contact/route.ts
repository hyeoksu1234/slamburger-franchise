import { NextResponse } from "next/server";

type InquiryPayload = {
  name?: string;
  phone?: string;
  region?: string;
  budget?: string;
  notes?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as InquiryPayload;
    const { name, phone, region, budget = "", notes = "" } = payload;

    if (!name?.trim() || !phone?.trim() || !region?.trim()) {
      return NextResponse.json(
        { error: "필수 항목이 누락되었습니다." },
        { status: 400 },
      );
    }

    console.info("[SLAMBURGER][FRANCHISE-INQUIRY]", {
      name,
      phone,
      region,
      budget,
      notes,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "문의가 성공적으로 접수되었습니다.",
    });
  } catch (error) {
    console.error("Failed to handle franchise inquiry", error);
    return NextResponse.json(
      { error: "요청을 처리하는 중 문제가 발생했습니다." },
      { status: 500 },
    );
  }
}
