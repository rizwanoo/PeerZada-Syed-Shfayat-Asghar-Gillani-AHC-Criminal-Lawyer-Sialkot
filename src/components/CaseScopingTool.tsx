import React, { useState } from 'react';
import { ADVOCATE_INFO } from '../data/legalData';
import { ShieldAlert, ArrowRight, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

interface CaseScopingToolProps {
  onNavigateToContact: (prefillStage?: string) => void;
}

interface StageScenario {
  id: string;
  title: string;
  badge: string;
  urgency: 'critical' | 'urgent' | 'routine';
  summary: string;
  remedies: string[];
  advisoryNote: string;
}

const SCENARIOS: StageScenario[] = [
  {
    id: 'arrest-threat',
    title: 'Threat of Imminent Arrest / Anticipatory Risk',
    badge: 'Immediate Action Needed',
    urgency: 'critical',
    summary:
      'Police raids or threats of arrest stemming from an ongoing dispute or undisclosed complaint.',
    remedies: [
      'Evaluate grounds for Pre-Arrest Bail under Section 498 CrPC before Sessions Court',
      'Obtain protective / transit bail if residing in a different territorial jurisdiction',
      'Document evidence of complainant’s ulterior motives or personal enmity (mala fide)',
    ],
    advisoryNote:
      'Do not go underground without securing interim bail; courts favor lawful surrender over abscondance.',
  },
  {
    id: 'fir-lodged',
    title: 'FIR Registered at Police Station',
    badge: 'Urgent Scrutiny',
    urgency: 'urgent',
    summary:
      'A formal First Information Report (FIR) has been lodged under specific sections of the Pakistan Penal Code (PPC).',
    remedies: [
      'Procure official certified copy of FIR and examine cognizable vs non-bailable clauses',
      'Move urgent interim pre-arrest bail to prevent police custody during preliminary investigation',
      'Explore petition under Section 22-A / 22-B CrPC or Quashment under Section 561-A CrPC if falsely implicated',
    ],
    advisoryNote:
      'Never attend a police station for interrogation without prior consultation and lawful protection.',
  },
  {
    id: 'custody-remand',
    title: 'Accused in Police Custody / Remand Hearing',
    badge: 'Urgent Judicial Intervention',
    urgency: 'critical',
    summary:
      'A family member or associate has been detained and is being produced before a Judicial Magistrate for physical remand.',
    remedies: [
      'Oppose physical police remand under Section 167 CrPC; request judicial lockup',
      'Demand mandatory medical examination if torture or coercion is suspected',
      'File application for Post-Arrest Bail under Section 497 CrPC once investigation concludes',
    ],
    advisoryNote:
      'Police cannot hold a detainee past 24 hours without an order of remand from a magistrate.',
  },
  {
    id: 'active-trial',
    title: 'Trial Stage & Witness Cross-Examination',
    badge: 'Trial Advocacy',
    urgency: 'routine',
    summary:
      'Challan submitted under Section 173 CrPC; trial is ongoing before Magistrate or Sessions Court.',
    remedies: [
      'Rigorous cross-examination of complainant and prosecution witnesses',
      'Confront ocular testimony with forensic and medico-legal discrepancies',
      'Frame strategic statement of the accused under Section 342 CrPC',
    ],
    advisoryNote:
      'Trial success rests upon surgical cross-examination and highlighting reasonable doubts.',
  },
];

export const CaseScopingTool: React.FC<CaseScopingToolProps> = ({ onNavigateToContact }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Syed Shfayat Asghar Gillani advocate,\n\nI am contacting your office from Sialkot regarding urgent criminal legal advisory:\n\nStage: ${activeScenario.title}\nSituation Summary: ${activeScenario.summary}\n\nPlease advise on an urgent consultation.`
    );
    window.open(`https://wa.me/923026609073?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white border-2 border-[#D5D9DE] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#26394B] font-bold mb-2">
          <span>Procedural Guidance</span>
          <span>·</span>
          <span>Sialkot Jurisdiction</span>
        </div>
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#080F17]">
          Assess Your Immediate Legal Procedural Stage
        </h3>
        <p className="text-sm text-[#475569] mt-2">
          Select the situation currently faced to understand statutory protections under the Code of
          Criminal Procedure (CrPC) and recommended immediate steps.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => setSelectedScenarioId(sc.id)}
              className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#080F17] text-white border-[#080F17] shadow-md'
                  : 'bg-[#FAF8F5] text-[#080F17] border-[#D5D9DE] hover:border-[#080F17] hover:bg-white'
              }`}
            >
              <div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider block mb-1 font-bold ${
                    isSelected
                      ? sc.urgency === 'critical'
                        ? 'text-rose-400'
                        : 'text-[#D5D9DE]'
                      : sc.urgency === 'critical'
                      ? 'text-rose-600'
                      : 'text-[#26394B]'
                  }`}
                >
                  {sc.badge}
                </span>
                <span
                  className={`text-xs sm:text-sm font-bold line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-[#080F17]'
                  }`}
                >
                  {sc.title}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className={`text-[11px] font-medium ${isSelected ? 'text-white/80' : 'text-[#64748B]'}`}>
                  Review Guidance
                </span>
                <ArrowRight
                  className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-[#26394B]'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Panel */}
      <div className="bg-[#FAF8F5] border-2 border-[#D5D9DE] rounded-xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#D5D9DE]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldAlert className="w-4 h-4 text-[#26394B]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#26394B] font-bold">
                Current Procedural Reality
              </span>
            </div>
            <h4 className="font-serif font-bold text-xl text-[#080F17]">
              {activeScenario.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">{activeScenario.summary}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleWhatsAppInquiry}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#080F17] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#080F17]" />
              <span>WhatsApp Brief</span>
            </button>

            <a
              href={`tel:${ADVOCATE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#080F17] hover:bg-[#14202E] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>

        {/* Action items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div>
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#080F17] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#26394B]" />
              <span>Statutory Legal Remedies</span>
            </h5>
            <ul className="space-y-2.5">
              {activeScenario.remedies.map((remedy, i) => (
                <li key={i} className="text-xs text-[#334155] flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#080F17] mt-1.5 shrink-0" />
                  <span>{remedy}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-[#D5D9DE] rounded-lg p-5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#64748B] block mb-1.5">
                Advocate's Procedural Caution
              </span>
              <p className="text-xs text-[#080F17] leading-relaxed italic">
                "{activeScenario.advisoryNote}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-[#64748B]">Confidential Intake</span>
              <button
                onClick={() => onNavigateToContact(activeScenario.title)}
                className="text-xs font-bold text-[#080F17] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Request Case Evaluation</span>
                <ArrowRight className="w-3 h-3 text-[#080F17]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
