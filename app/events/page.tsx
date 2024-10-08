'use client'
import { useState } from 'react';

export default function Events() {
    const [selectedDay, setSelectedDay] = useState<'Day-1' | 'Day-2' | 'Day-3'>('Day-1');

    const rundownData: { [key in 'Day-1' | 'Day-2' | 'Day-3']: { no: number; start: string; end: string; event: string; }[] } = {
        'Day-1': [
            { no: 1, start: '07:15', end: '08:00', event: 'Open Gate' },
            { no: 2, start: '08:00', end: '08:10', event: 'Opening MC' },
            { no: 3, start: '08:10', end: '08:20', event: 'Menyanyikan Lagu Indonesia Raya dan Mars ITERA' },
            { no: 4, start: '08:20', end: '08:30', event: 'Persembahan Tarian Daerah' },
            { no: 5, start: '08:30', end: '08:35', event: 'Sambutan Ketua Pelaksana ' },
            { no: 6, start: '08:35', end: '08:40', event: 'Sambutan Rektor ITERA ' },
            { no: 7, start: '08:40', end: '08:45', event: 'Bridging MC ' },
            { no: 8, start: '08:45', end: '09:30', event: 'Sesi Ikatan Alumni ITERA' },
            { no: 9, start: '09:30', end: '10:30', event: 'Scholarship Seminar ' },
            { no: 10, start: '10:30', end: '11:45', event: 'Company Session:Jiva ' },
            { no: 11, start: '11:45', end: '13:00', event: 'ISHOMA ' },
            { no: 12, start: '13:00', end: '14:15', event: 'Company Session: Bank Syariah Indonesia ' },
            { no: 13, start: '14:15', end: '14:30', event: 'Dokumentasi serta penyerahan plakat' },
            { no: 14, start: '14:30', end: '14:35', event: 'Closing MC' },

        ],
        'Day-2': [
          { no: 1, start: '07:15', end: '08:30', event: 'Open Gate' },
          { no: 2, start: '08:30', end: '08:45', event: 'Opening MC' },
          { no: 3, start: '08:45', end: '08:55', event: 'Menyanyikan Lagu Indonesia Raya dan Mars ITERA' },
          { no: 4, start: '08:55', end: '09:00', event: 'Sambutan Kepala Biro Layanan Akademik dan Umum' },
          { no: 5, start: '09:00', end: '09:05', event: 'Bridging MC ' },
          { no: 6, start: '09:05', end: '11:05', event: 'Workshop: Career Panel by Vina Muliana ' },
          { no: 7, start: '11:05', end: '11:15', event: 'Dokumentasi' },
          { no: 8, start: '11:15', end: '13:00', event: 'ISHOMA' },
          { no: 9, start: '13:00', end: '14:15', event: 'Company Session: Jasa Raharja ' },
          { no: 10, start: '14:15', end: '15:30', event: 'Company Session: PT LDC ' },
          { no: 11, start: '15:30', end: '16:45', event: 'Company Session: PT Paragon'},
          { no: 12, start: '16:45', end: '16:55', event: 'Dokumentasi serta penyerahan plakat' },
          { no: 13, start: '16:55', end: '17:00', event: 'Closing MC' },
        ],
        'Day-3': [
          { no: 1, start: '07:15', end: '08:00', event: 'Open Gate' },
          { no: 2, start: '08:00', end: '08:05', event: 'Opening MC' },
          { no: 3, start: '08:05', end: '08:15', event: 'Menyanyikan Lagu Indonesia Raya dan Mars ITERA' },
          { no: 4, start: '08:15', end: '08:20', event: 'Bridging MC ' },
          { no: 6, start: '08:20', end: '11:30', event: 'Career Fair Session' },
          { no: 7, start: '11:30', end: '13:00', event: 'ISHOMA' },
          { no: 8, start: '13:00', end: '14:15', event: 'Company Session: PT Hokkan Deltapack' },
          { no: 9, start: '14:15', end: '15:30', event: 'Company Session: PT KAI ' },
          { no: 10, start: '15:30', end: '15:45', event: 'Dokumentasi serta penyerahan plakat' },
          { no: 11, start: '15:45', end: '16:00', event: 'Closing: Seni Modern' },
          { no: 12, start: '16:00', end: '16:15', event: 'Closing MC' },
        ]
    };

    return (
        <div className="bg-black min-h-screen py-8 px-4">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4 text-center">Detail Kegiatan</h2>

            <p className="text-yellow-500 text-lg mb-6 text-justify">
                ITERA Career Day 2023 adalah bagian dari rangkaian kegiatan Dies Natalis ke-9 ITERA yang bertujuan mempertemukan mahasiswa dan alumni ITERA dengan perusahaan-perusahaan di Indonesia. Acara ini akan berlangsung selama tiga hari, dari tanggal 1 hingga 3 September 2023, bertempat di Gedung Kuliah Umum 2 ITERA. Selain menghadirkan pihak HR dari berbagai perusahaan, akan ada sesi khusus oleh Vina Mulian, seorang HR Practitioner dari MIND ID.<br/> Berikut adalah rundown dari ITERA Career Day 2023 :
            </p>


            <div className="flex justify-center mb-8">
                {(['Day-1', 'Day-2', 'Day-3'] as Array<'Day-1' | 'Day-2' | 'Day-3'>).map((day) => (
                    <button
                        key={day}
                        className={`px-4 py-2 mx-2 rounded-lg font-bold text-lg ${
                            selectedDay === day ? 'bg-yellow-500 text-black' : 'bg-black text-yellow-500 border border-yellow-500'
                        }`}
                        onClick={() => setSelectedDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-fixed text-yellow-500">
                    <thead>
                        <tr className="bg-yellow-500 text-black">
                            <th className="px-4 py-2 w-1/12">No</th>
                            <th className="px-4 py-2 w-3/12">Mulai</th>
                            <th className="px-4 py-2 w-3/12">Selesai</th>
                            <th className="px-4 py-2 w-5/12">Mata Acara</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rundownData[selectedDay].map((item) => (
                            <tr key={item.no} className="border-t border-yellow-500">
                                <td className="px-4 py-2 text-center">{item.no}</td>
                                <td className="px-4 py-2 text-center">{item.start}</td>
                                <td className="px-4 py-2 text-center">{item.end}</td>
                                <td className="px-4 py-2">
                                    <div className="break-words text-center">{item.event}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}