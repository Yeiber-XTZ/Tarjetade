/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Medal, 
  BarChart3, 
  Zap, 
  Trophy, 
  MapPin, 
  Users,
  Sparkles
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans text-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
      >
        {/* Header Section */}
        <div className="p-8 pb-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold text-sm tracking-wide">
            <Sparkles size={16} />
            PERFIL PRO
          </div>
          <div className="text-2xl font-black italic tracking-tighter text-slate-800">
            RANKING <span className="text-blue-600">#1</span>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="p-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="relative group">
            <div className="w-32 h-32 bg-slate-800 rounded-2xl overflow-hidden relative border-4 border-white shadow-lg">
              <img 
                src="https://picsum.photos/seed/athlete/200/200" 
                alt="Athlete Profile" 
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <div className="absolute -top-2 -right-2 bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-md">
              #1
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-800 uppercase">
                Jeronimo Rios
              </h1>
              <div className="flex flex-col gap-1 mt-2 text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>LIGA ARENAS DEMO</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>SIN MUNICIPIO</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Atletismo
              </span>
              <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                General
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={<Medal className="text-blue-500" />} value="1" label="PODIOS" />
          <StatCard icon={<BarChart3 className="text-blue-500" />} value="1" label="TOP 10" />
          <StatCard icon={<Zap className="text-blue-500" />} value="1" label="VALIDOS" />
          <StatCard icon={<Trophy className="text-blue-500" />} value="1" label="PRUEBAS" />
        </div>

        {/* Consistency Bar */}
        <div className="p-8 space-y-3">
          <div className="flex justify-between items-end">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Consistencia</h3>
            <span className="text-xl font-black text-slate-800">100%</span>
          </div>
          <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-200">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-yellow-500 via-blue-600 to-blue-800"
            />
          </div>
        </div>

        {/* Tests Section */}
        <div className="px-8 pb-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-100/50 flex items-center gap-2 border-b border-gray-200">
              <Zap size={18} className="text-slate-800" />
              <span className="text-sm font-black text-slate-800 uppercase tracking-widest">Pruebas</span>
            </div>
            <div className="p-6 flex justify-between items-center bg-white">
              <div className="text-xl font-bold text-slate-700 uppercase tracking-tight">
                1500M Masculino
              </div>
              <div className="flex items-center gap-1 text-blue-600 font-black italic text-2xl">
                VÁLIDO <span className="text-orange-500">#1</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: ReactNode, value: string, label: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center gap-2 transition-all hover:shadow-md hover:bg-white"
    >
      <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100">
        {icon}
      </div>
      <div className="text-3xl font-black text-slate-800">{value}</div>
      <div className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">{label}</div>
    </motion.div>
  );
}
