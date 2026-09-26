import React, { useState, useMemo } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { ToolCommonMistakes, MistakeItem } from './ToolCommonMistakes';
import { FABRIC_TOOLS } from '../../data/tools';

interface FabricCostCalculatorViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

const COMMON_MISTAKES: MistakeItem[] = [
  {
    mistake: 'Forgetting notions and sundries in total budget',
    solution: 'Zippers, matching Gutermann thread spools, fusible interfacing, and buttons often add $10 to $25 per garment on top of fabric costs.'
  },
  {
    mistake: 'Calculating cost only on fabric cut, ignoring fabric shrinkage waste',
    solution: 'If you buy 3 yards at $20/yd ($60) and 10% shrinks in the wash, your effective price per usable yard rises from $20 to $22.22.'
  },
  {
    mistake: 'Underpricing labor for handmade sewing projects',
    solution: 'Sewing artisans frequently forget to bill for pattern tracing, fabric cutting, and pressing time. Include all production hours when budgeting.'
  }
];

export const FabricCostCalculatorView: React.FC<FabricCostCalculatorViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'fabric-cost-calculator')!;

  // Inputs
  const [pricePerYard, setPricePerYard] = useState<string>('18.50');
  const [yardage, setYardage] = useState<string>('3.5');
  const [salesTaxPercent, setSalesTaxPercent] = useState<string>('7.5');
  const [shippingCost, setShippingCost] = useState<string>('5.00');
  const [notionsCost, setNotionsCost] = useState<string>('12.00');
  const [laborHours, setLaborHours] = useState<string>('3');
  const [hourlyRate, setHourlyRate] = useState<string>('25');
  const [itemsProduced, setItemsProduced] = useState<number>(1);

  // Live calculations
  const calculation = useMemo(() => {
    const price = parseFloat(pricePerYard);
    const yds = parseFloat(yardage);
    const taxPct = parseFloat(salesTaxPercent) || 0;
    const shipping = parseFloat(shippingCost) || 0;
    const notions = parseFloat(notionsCost) || 0;
    const hours = parseFloat(laborHours) || 0;
    const rate = parseFloat(hourlyRate) || 0;
    const count = itemsProduced > 0 ? itemsProduced : 1;

    if (isNaN(price) || isNaN(yds) || price < 0 || yds <= 0) {
      return {
        isValid: false,
        error: 'Please enter valid numbers for fabric price and yardage.',
        rawFabricCost: 0,
        taxAmount: 0,
        materialsTotal: 0,
        laborTotal: 0,
        projectTotal: 0,
        costPerItem: 0,
        suggestedWholesale: 0,
        suggestedRetail: 0
      };
    }

    const rawFabricCost = price * yds;
    const taxAmount = (rawFabricCost + notions) * (taxPct / 100);
    const materialsTotal = rawFabricCost + notions + shipping + taxAmount;
    const laborTotal = hours * rate;
    const projectTotal = materialsTotal + laborTotal;
    const costPerItem = projectTotal / count;
    const suggestedWholesale = costPerItem * 1.8;
    const suggestedRetail = costPerItem * 2.5;

    return {
      isValid: true,
      error: null,
      rawFabricCost: Math.round(rawFabricCost * 100) / 100,
      taxAmount: Math.round(taxAmount * 100) / 100,
      materialsTotal: Math.round(materialsTotal * 100) / 100,
      laborTotal: Math.round(laborTotal * 100) / 100,
      projectTotal: Math.round(projectTotal * 100) / 100,
      costPerItem: Math.round(costPerItem * 100) / 100,
      suggestedWholesale: Math.round(suggestedWholesale * 100) / 100,
      suggestedRetail: Math.round(suggestedRetail * 100) / 100
    };
  }, [pricePerYard, yardage, salesTaxPercent, shippingCost, notionsCost, laborHours, hourlyRate, itemsProduced]);

  const handleClear = () => {
    setPricePerYard('');
    setYardage('');
    setShippingCost('0');
    setNotionsCost('0');
    setLaborHours('0');
  };

  const resultSummary = calculation.isValid
    ? `Total Project Cost: $${calculation.projectTotal.toFixed(2)} ($${calculation.costPerItem.toFixed(2)}/item) | Materials: $${calculation.materialsTotal.toFixed(2)} | Labor: $${calculation.laborTotal.toFixed(2)} | Calculated via Elite Fabrics (https://elitefabrics.online/tools/fabric-cost-calculator)`
    : '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Fabric Cost Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#524B42] leading-normal">
          Calculate the total budget, cost per item, and retail pricing markups for sewing and upholstery projects.
        </p>
      </div>

      <ToolTrustSignals />

      {/* CALCULATOR */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Cost &amp; Material Inputs
          </span>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cost-price" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Fabric Price ($ / Yard)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-sm text-[#7A7266]">$</span>
                  <input
                    id="cost-price"
                    type="number"
                    step="0.25"
                    min="0"
                    value={pricePerYard}
                    onChange={(e) => setPricePerYard(e.target.value)}
                    placeholder="18.50"
                    className="w-full min-h-[48px] pl-8 pr-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cost-yardage" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Total Fabric Yardage
                </label>
                <input
                  id="cost-yardage"
                  type="number"
                  step="0.125"
                  min="0.1"
                  value={yardage}
                  onChange={(e) => setYardage(e.target.value)}
                  placeholder="3.5"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Notions, Shipping, Tax Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label htmlFor="cost-notions" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Notions ($)
                </label>
                <input
                  id="cost-notions"
                  type="number"
                  step="0.5"
                  value={notionsCost}
                  onChange={(e) => setNotionsCost(e.target.value)}
                  placeholder="12.00"
                  className="w-full min-h-[44px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C] focus:bg-white focus:outline-none"
                />
                <span className="text-[11px] text-[#7A7266]">Thread, zip, buttons</span>
              </div>

              <div>
                <label htmlFor="cost-shipping" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Shipping ($)
                </label>
                <input
                  id="cost-shipping"
                  type="number"
                  step="0.5"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(e.target.value)}
                  placeholder="5.00"
                  className="w-full min-h-[44px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C] focus:bg-white focus:outline-none"
                />
                <span className="text-[11px] text-[#7A7266]">Delivery fee</span>
              </div>

              <div>
                <label htmlFor="cost-tax" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Sales Tax (%)
                </label>
                <input
                  id="cost-tax"
                  type="number"
                  step="0.1"
                  value={salesTaxPercent}
                  onChange={(e) => setSalesTaxPercent(e.target.value)}
                  placeholder="7.5"
                  className="w-full min-h-[44px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C] focus:bg-white focus:outline-none"
                />
                <span className="text-[11px] text-[#7A7266]">Local tax rate</span>
              </div>
            </div>

            {/* Optional Labor Calculation */}
            <div className="p-3.5 bg-[#FAF8F5] border border-[#E4DDD1] rounded-md space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3A352E] block">
                Optional Sewing Labor &amp; Finished Yield
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="cost-hours" className="block text-[11px] font-semibold text-[#524B42] mb-1">
                    Sewing Time (Hours)
                  </label>
                  <input
                    id="cost-hours"
                    type="number"
                    step="0.5"
                    min="0"
                    value={laborHours}
                    onChange={(e) => setLaborHours(e.target.value)}
                    placeholder="3"
                    className="w-full min-h-[40px] px-2.5 py-1.5 bg-white border border-[#D0C7BA] rounded text-sm text-[#1C1C1C]"
                  />
                </div>

                <div>
                  <label htmlFor="cost-rate" className="block text-[11px] font-semibold text-[#524B42] mb-1">
                    Hourly Rate ($/hr)
                  </label>
                  <input
                    id="cost-rate"
                    type="number"
                    step="1"
                    min="0"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    placeholder="25"
                    className="w-full min-h-[40px] px-2.5 py-1.5 bg-white border border-[#D0C7BA] rounded text-sm text-[#1C1C1C]"
                  />
                </div>

                <div>
                  <label htmlFor="cost-qty" className="block text-[11px] font-semibold text-[#524B42] mb-1">
                    Finished Items
                  </label>
                  <input
                    id="cost-qty"
                    type="number"
                    min="1"
                    value={itemsProduced}
                    onChange={(e) => setItemsProduced(parseInt(e.target.value) || 1)}
                    placeholder="1"
                    className="w-full min-h-[40px] px-2.5 py-1.5 bg-white border border-[#D0C7BA] rounded text-sm text-[#1C1C1C]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Total Project Cost
                </span>
              </div>

              {calculation.isValid ? (
                <>
                  <div>
                    <span className="text-xs text-[#6B6357] block">Total Expenditure</span>
                    <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                      ${calculation.projectTotal.toFixed(2)}
                    </div>
                    <p className="text-xs text-[#7A7266] mt-0.5">
                      Cost per finished item: <strong className="text-[#1C1C1C]">${calculation.costPerItem.toFixed(2)}</strong> ({itemsProduced} item{itemsProduced > 1 ? 's' : ''})
                    </p>
                  </div>

                  {/* Itemized summary */}
                  <div className="p-3 bg-white border border-[#E0D8CB] rounded-md text-xs space-y-1.5">
                    <span className="font-semibold text-[#1C1C1C] block">Cost Itemization:</span>
                    <div className="flex justify-between">
                      <span>• Raw Fabric ({yardage} yds @ ${pricePerYard}):</span>
                      <span className="font-mono">${calculation.rawFabricCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Notions &amp; Shipping:</span>
                      <span className="font-mono">${(parseFloat(notionsCost || '0') + parseFloat(shippingCost || '0')).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Sales Tax:</span>
                      <span className="font-mono">${calculation.taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-[#F0EAE1]">
                      <span className="font-medium text-[#1C1C1C]">Materials Total:</span>
                      <span className="font-mono font-bold">${calculation.materialsTotal.toFixed(2)}</span>
                    </div>
                    {calculation.laborTotal > 0 && (
                      <div className="flex justify-between">
                        <span>• Labor ({laborHours} hrs @ ${hourlyRate}/hr):</span>
                        <span className="font-mono">${calculation.laborTotal.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  {/* Suggested Selling Pricing */}
                  <div className="p-3 bg-white border border-[#E0D8CB] rounded-md text-xs space-y-1">
                    <span className="font-semibold text-[#1C1C1C] block">Suggested Pricing (For Crafters &amp; Sellers):</span>
                    <div className="flex justify-between text-[#5C554B]">
                      <span>• Wholesale Markup (1.8×):</span>
                      <span className="font-mono font-semibold">${calculation.suggestedWholesale.toFixed(2)}/item</span>
                    </div>
                    <div className="flex justify-between text-[#5C554B]">
                      <span>• Retail Markup (2.5×):</span>
                      <span className="font-mono font-bold text-[#9E472A]">${calculation.suggestedRetail.toFixed(2)}/item</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center text-xs text-[#7A7266]">
                  {calculation.error}
                </div>
              )}
            </div>

            <ToolActionButtons
              onClear={handleClear}
              resultText={resultSummary}
            />
          </div>
        </div>
      </div>

      <ToolCommonMistakes mistakes={COMMON_MISTAKES} toolName="the Fabric Cost Calculator" />
      <ToolFAQSection faqs={toolData.faqs} />
      <ToolRelatedResources
        articleSlugs={toolData.relatedArticleSlugs}
        fabricSlugs={toolData.relatedFabricSlugs}
        onNavigate={onNavigate}
      />
    </div>
  );
};
