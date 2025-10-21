"use client";

import { FormEvent, useState } from "react";

type InquiryFormData = {
  name: string;
  phone: string;
  region: string;
  budget: string;
  notes: string;
};

type ToastState =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

const initialFormData: InquiryFormData = {
  name: "",
  phone: "",
  region: "",
  budget: "",
  notes: "",
};

export function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const handleChange = (field: keyof InquiryFormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const showToast = (nextToast: ToastState) => {
    setToast(nextToast);
    if (nextToast) {
      setTimeout(() => {
        setToast(null);
      }, 4000);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.region.trim()) {
      showToast({
        type: "error",
        message: "이름, 연락처, 창업 희망 지역은 필수 입력 항목입니다.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("failed");
      }

      setFormData(initialFormData);
      showToast({
        type: "success",
        message: "문의가 접수되었습니다. 담당자가 곧 연락드릴게요!",
      });
    } catch (error) {
      console.error("Failed to submit inquiry", error);
      showToast({
        type: "error",
        message: "전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <div
          role="status"
          className={`fixed left-1/2 top-8 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-2xl px-6 py-4 text-sm font-semibold shadow-lg transition ${toast.type === "success" ? "bg-[#FF6600] text-black" : "bg-white text-[#FF6600]"}`}
        >
          {toast.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 md:grid-cols-2"
        noValidate
        aria-describedby="contact-guidance"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60"
          >
            이름 *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => handleChange("name")(event.target.value)}
            placeholder="홍길동"
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-[#FF6600] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60"
          >
            연락처 *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => handleChange("phone")(event.target.value)}
            placeholder="010-0000-0000"
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-[#FF6600] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="region"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60"
          >
            창업 희망 지역 *
          </label>
          <input
            id="region"
            name="region"
            type="text"
            value={formData.region}
            onChange={(event) => handleChange("region")(event.target.value)}
            placeholder="서울 마포구"
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-[#FF6600] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="budget"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60"
          >
            예상 투자 예산
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={(event) => handleChange("budget")(event.target.value)}
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-black focus:border-[#FF6600] focus:outline-none"
          >
            <option value="">선택해주세요</option>
            <option value="under-100">1억 이하</option>
            <option value="100-150">1억~1억 5천만 원</option>
            <option value="over-150">1억 5천만 원 이상</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="notes"
            className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-white/60"
          >
            비고
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={(event) => handleChange("notes")(event.target.value)}
            placeholder="궁금하신 내용이나 운영 계획을 자유롭게 남겨주세요."
            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-[#FF6600] focus:outline-none"
          />
        </div>

        <p
          id="contact-guidance"
          className="text-xs text-white/60 md:col-span-2"
        >
          * 필수 항목입니다. 입력하신 정보는 SLAMBURGER 가맹 상담 목적으로만 사용됩니다.
        </p>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#FF6600] px-6 py-3 text-base font-semibold text-black transition hover:bg-[#FF7E33] disabled:cursor-not-allowed disabled:bg-[#FF6600]/60"
          >
            {isSubmitting ? "전송 중..." : "상담 신청 보내기"}
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
