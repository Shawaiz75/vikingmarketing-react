"use client";

import { useState } from "react";
import Link from "next/link";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Missed Call ROI Calculator.
 * Lost revenue = missed calls × close rate × average value.
 * Recovered revenue assumes a conservative 60% recovery rate.
 * ROI = (recovered − monthly cost) ÷ monthly cost.
 */
export default function RoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(40);
  const [closeRate, setCloseRate] = useState(30);
  const [avgValue, setAvgValue] = useState(400);
  const [monthlyCost, setMonthlyCost] = useState(297);

  const lost = missedCalls * (closeRate / 100) * avgValue;
  const recovered = lost * 0.6;
  const net = recovered - monthlyCost;
  const roi = monthlyCost > 0 ? (net / monthlyCost) * 100 : 0;

  const field = "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[16px] text-white outline-none transition focus:border-[#8b5cf6]";

  return (
    <div className="card-strong grid gap-0 overflow-hidden lg:grid-cols-2">
      {/* Inputs */}
      <div className="p-7 sm:p-9">
        <h2 className="font-heading text-2xl font-bold text-white">Your Numbers</h2>
        <div className="mt-6 space-y-6">
          <div>
            <label htmlFor="roi-missed" className="text-[14.5px] font-medium text-white/80">
              Missed calls per month
            </label>
            <input
              id="roi-missed"
              type="number"
              min={0}
              max={2000}
              value={missedCalls}
              onChange={(e) => setMissedCalls(Math.max(0, Number(e.target.value)))}
              className={field}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="roi-close" className="text-[14.5px] font-medium text-white/80">
                Close rate
              </label>
              <span className="text-[14.5px] font-semibold text-[#efa4f2]">{closeRate}%</span>
            </div>
            <input
              id="roi-close"
              type="range"
              min={5}
              max={80}
              step={1}
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="mt-3 w-full accent-[#8b5cf6]"
            />
            <p className="mt-1.5 text-[12.5px] text-white/45">
              Most service businesses land between 20% and 40%.
            </p>
          </div>
          <div>
            <label htmlFor="roi-value" className="text-[14.5px] font-medium text-white/80">
              Average customer value ($)
            </label>
            <input
              id="roi-value"
              type="number"
              min={0}
              max={100000}
              value={avgValue}
              onChange={(e) => setAvgValue(Math.max(0, Number(e.target.value)))}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="roi-cost" className="text-[14.5px] font-medium text-white/80">
              Monthly cost to fix it ($)
            </label>
            <input
              id="roi-cost"
              type="number"
              min={1}
              max={10000}
              value={monthlyCost}
              onChange={(e) => setMonthlyCost(Math.max(1, Number(e.target.value)))}
              className={field}
            />
            <p className="mt-1.5 text-[12.5px] text-white/45">Viking plans start at $297/month.</p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="border-t border-white/10 bg-gradient-to-b from-[#8547f6]/15 to-transparent p-7 sm:p-9 lg:border-l lg:border-t-0">
        <h3 className="font-heading text-2xl font-bold text-white">Your Result</h3>
        <dl className="mt-6 space-y-5" aria-live="polite">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <dt className="text-[14.5px] text-white/70">Lost revenue per month</dt>
            <dd className="font-heading text-3xl font-bold text-[#f87171]">{fmt(lost)}</dd>
          </div>
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <dt className="text-[14.5px] text-white/70">
              Realistically recoverable
              <span className="block text-[12px] text-white/45">at a conservative 60% recovery rate</span>
            </dt>
            <dd className="font-heading text-3xl font-bold text-white">{fmt(recovered)}</dd>
          </div>
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <dt className="text-[14.5px] text-white/70">Net monthly gain</dt>
            <dd className="font-heading text-3xl font-bold text-[#37ca37]">{fmt(net)}</dd>
          </div>
          <div className="flex items-end justify-between gap-4">
            <dt className="text-[14.5px] text-white/70">Return on investment</dt>
            <dd className="grad-text font-heading text-4xl font-bold">
              {roi >= 0 ? "" : "−"}
              {Math.floor(Math.abs(roi)).toLocaleString()}%
            </dd>
          </div>
        </dl>
        <Link
          href="/missed-call-text-back"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-[#efa4f2] hover:text-white"
        >
          Recover these calls
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
