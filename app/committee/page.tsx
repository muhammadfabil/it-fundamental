import React from 'react';

interface CommitteeBoxProps {
  name: string;
  role: string;
}

interface Metadata {
  title: string;
  description: string;
  icons: {
    icon: string;
  };
}


const CommitteeBox: React.FC<CommitteeBoxProps> = ({ name, role }) => (
  <div className="p-4 bg-yellow-500 text-black rounded-lg font-bold text-lg">
    {name}
    <div className="text-sm font-normal">{role}</div>
  </div>
);

export default function Committee() {
  return (
    <div className="bg-black min-h-screen py-8 px-4">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4 text-center">Susunan Kepanitiaan</h2>

      <div className="flex justify-center relative">
        <div className="text-yellow-500 relative">
          {/* Section 1 */}
          <div className="flex flex-col items-center mb-8 relative">
            <CommitteeBox name="Muhammad Fabil" role="Ketua Pelaksana" />
            <div className="absolute h-8 w-0.5 bg-yellow-500 top-full left-1/2 transform -translate-x-1/2"></div>
          </div>

          {/* Section 2 */}
          <div className="flex justify-center space-x-4 mb-8 relative">
            <div className="absolute h-0.5 w-full bg-yellow-500 top-0 left-0 transform translate-y-1/2"></div>
            {['Muhammad Faris', 'Evi Listia', 'Ade Intan Wulandari', 'Safira Salsabila', 'Siti Qonita Mahdiya'].map((name, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <CommitteeBox name={name} role={
                  index === 0 ? "Sekretaris Jenderal" :
                  index === 1 ? "Bendahara 1" :
                  index === 2 ? "Bendahara 2" :
                  index === 3 ? "Sekretaris 1" : "Sekretaris 2"
                } />
                <div className="absolute h-8 w-0.5 bg-yellow-500 top-full left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <div className="flex justify-center space-x-4 flex-wrap relative">
            <div className="absolute h-0.5 w-full bg-yellow-500 top-0 left-0 transform translate-y-1/2"></div>
            {[
              { name: 'Nadinda Aurora', role: 'Ketua Divisi Acara' },
              { name: 'Thoriq Nouval', role: 'Ketua Divisi Lo' },
              { name: 'Irfan Surya', role: 'Ketua Divisi Manajeman Lapangan' },
              { name: 'Diana Sefriany', role: 'Ketua Divisi Humas' },
              { name: 'Widi Reeh', role: 'Ketua Divisi Operasional' },
              { name: 'Alfie Syahrin', role: 'Ketua Divisi PDD' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <CommitteeBox name={item.name} role={item.role} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}