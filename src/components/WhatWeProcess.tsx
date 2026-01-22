import React from 'react';
import { Laptop, Server, Router, Mouse, Smartphone, HardDrive, CheckCircle2 } from 'lucide-react';

const WhatWeProcess: React.FC = () => {
  const categories = [
    {
      title: "End-User Devices",
      items: ["Laptops & Notebooks", "Desktops & Workstations", "All-in-One PCs", "Tablets"],
      icon: Laptop,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Enterprise Infrastructure",
      items: ["Rack & Tower Servers", "Storage Arrays & SANs", "Blade Servers", "UPS Systems"],
      icon: Server,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Networking Equipment",
      items: ["Switches & Routers", "Firewalls", "Wireless Access Points", "Network Storage (NAS)"],
      icon: Router,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Peripherals",
      items: ["LCD & LED Monitors", "Keyboards & Mice", "Printers & Scanners", "Docking Stations"],
      icon: Mouse,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Mobile & Telecom",
      items: ["Corporate Smartphones", "VoIP Systems", "Conference Equipment", "Two-Way Radios"],
      icon: Smartphone,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Data Storage Media",
      items: ["Hard Disk Drives (HDD)", "Solid State Drives (SSD)", "Backup Tapes", "USB Drives"],
      icon: HardDrive,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Comprehensive Equipment Processing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What We Process</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            From individual devices to entire data centers, we handle the complete spectrum of corporate IT equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${cat.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProcess;