"use client";

import { useState } from "react";
import Link from "next/link";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

/** Missed Call ROI Calculator.
 *  Lost revenue = missed calls × close rate × average value.
 *  Recovered revenue assumes a conservative 60% recovery rate, because no
 *  tool catches 100% - stated in the page copy right below this component. */
const RECOVERY = 0.6;

const fieldClass =
  "w-full rounded-xl border border-[#c17ded]/30 bg-black/30 px-4 py-3.5 text-[16px] text-white outline-none transition focus:border-[#8b5cf6] focus:shadow-[0_0_0_3px_rgba(92,29,232,0.3)]";

function ResultRow({
  label,
  value,
  highlight,
  last,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 text-[14.5px] ${
        last ? "" : "border-b border-dashed border-white/10"
      }`}
    >
      <span className="text-white/60">{label}</span>
      <span className={`font-heading font-bold ${highlight ? "text-[17px] text-[#efa4f2]" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

export default function RoiCalculator() {
  const [calls, setCalls] = useState(40);
  const [avgValue, setAvgValue] = useState(400);
  const [closeRatePct, setCloseRatePct] = useState(30);
  const [cost, setCost] = useState(297);

  const closeRate = Math.max(0, Math.min(100, closeRatePct)) / 100;
  const lostCustomers = calls * closeRate;
  const lostRevenue = lostCustomers * avgValue;
  const recovered = lostRevenue * RECOVERY;
  const net = recovered - cost;
  const roi = cost > 0 ? (net / cost) * 100 : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Inputs */}
      <div className="card-strong rounded-[22px] p-7 sm:p-8">
        <h2 className="flex items-center gap-2.5 font-heading text-[19px] font-bold text-white">
          <span
            aria-hidden
            className="h-[9px] w-[9px] flex-none rounded-full bg-[#efa4f2] shadow-[0_0_12px_#efa4f2]"
          />
          Your Numbers
        </h2>

        <div className="mt-6">
          <label htmlFor="roi-calls" className="block text-[14px] font-semibold text-white">
            Missed calls per month{" "}
            <span className="font-normal text-white/45">(calls that go unanswered)</span>
          </label>
          <input
            id="roi-calls"
            type="number"
            min={0}
            max={2000}
            value={calls}
            onChange={(e) => setCalls(Math.max(0, Number(e.target.value)))}
            className={`mt-2 ${fieldClass}`}
          />
        </div>

        <div className="mt-6">
          <label htmlFor="roi-value" className="block text-[14px] font-semibold text-white">
            Average job / customer value{" "}
            <span className="font-normal text-white/45">(what one new customer is worth)</span>
          </label>
          <div className="relative mt-2">
            <span
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-[#efa4f2]"
            >
              $
            </span>
            <input
              id="roi-value"
              type="number"
              min={0}
              max={100000}
              value={avgValue}
              onChange={(e) => setAvgValue(Math.max(0, Number(e.target.value)))}
              className={`${fieldClass} pl-8`}
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-baseline justify-between">
            <label htmlFor="roi-close" className="text-[14px] font-semibold text-white">
              Close rate
            </label>
            <span className="font-heading text-[16px] font-bold text-[#efa4f2]">
              {Math.round(closeRate * 100)}%
            </span>
          </div>
          <input
            id="roi-close"
            type="range"
            min={1}
            max={100}
            step={1}
            value={closeRatePct}
            onChange={(e) => setCloseRatePct(Number(e.target.value))}
            className="mt-3 w-full accent-[#8b5cf6]"
          />
          <p className="mt-1.5 text-[12.5px] text-white/45">The % of leads you typically win</p>
        </div>

        <div className="mt-6">
          <label htmlFor="roi-cost" className="block text-[14px] font-semibold text-white">
            Monthly cost of the solution{" "}
            <span className="font-normal text-white/45">(what you&apos;d pay to catch these calls)</span>
          </label>
          <div className="relative mt-2">
            <span
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-[#efa4f2]"
            >
              $
            </span>
            <input
              id="roi-cost"
              type="number"
              min={0}
              max={10000}
              value={cost}
              onChange={(e) => setCost(Math.max(0, Number(e.target.value)))}
              className={`${fieldClass} pl-8`}
            />
          </div>
          <p className="mt-1.5 text-[12.5px] text-white/45">Viking plans start at $297/month.</p>
        </div>
      </div>

      {/* Results */}
      <div className="card-strong overflow-hidden rounded-[22px]">
        <div className="border-b border-white/10 px-6 py-7 text-center" aria-live="polite">
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-white/50">
            Lost revenue per month
          </p>
          <p
            className="mt-2 bg-clip-text font-heading text-[clamp(36px,7vw,54px)] font-extrabold leading-[1.05] text-transparent"
            style={{ backgroundImage: "linear-gradient(100deg, #fff, #efa4f2)" }}
          >
            {money(lostRevenue)}
          </p>
          <p className="text-[13.5px] text-white/50">about {money(lostRevenue * 12)} per year</p>
        </div>

        <dl className="px-6 py-2 sm:px-7">
          <ResultRow label="Potential customers missed / mo" value={Math.round(lostCustomers).toLocaleString("en-US")} />
          <ResultRow label="Revenue you could recover / mo" value={money(recovered)} highlight />
          <ResultRow label="Solution cost / mo" value={money(cost)} />
          <ResultRow label="Net gain / mo" value={money(net)} last />
        </dl>

        <div className="mx-6 rounded-2xl border border-[#c17ded]/25 bg-gradient-to-br from-[#5c1de8]/35 to-[#370ac5]/25 p-4 text-center sm:mx-7">
          <p className="text-[12.5px] font-semibold uppercase tracking-[1.5px] text-white/50">Estimated ROI</p>
          <p className="mt-0.5 font-heading text-[30px] font-extrabold text-white">
            {cost > 0 ? `${Math.round(roi).toLocaleString("en-US")}%` : "—"}
          </p>
        </div>

        <div className="px-6 pb-7 pt-6 sm:px-7">
          <Link
            href="/missed-call-text-back"
            className="block rounded-xl py-4 text-center font-heading text-[16px] font-bold text-white shadow-[0_10px_30px_rgba(92,29,232,0.45)] transition hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--grad-cta)" }}
          >
            Recover these calls →
          </Link>
        </div>
      </div>
    </div>
  );
}
