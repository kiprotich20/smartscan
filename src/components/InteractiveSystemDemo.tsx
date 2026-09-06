import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Smartphone, 
  QrCode, 
  CheckCircle2, 
  XCircle, 
  MapPin, 
  Users, 
  Clock, 
  Download, 
  RefreshCw, 
  ShieldCheck, 
  AlertCircle, 
  BarChart3, 
  FileText,
  Building2,
  Calendar
} from 'lucide-react';
import { StudentRecord, ClassSession } from '../types';

export const InteractiveSystemDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lecturer' | 'student'>('lecturer');
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);
  const [qrToken, setQrToken] = useState('BU-CSC101-9872');
  const [secondsRemaining, setSecondsRemaining] = useState(25);
  const [geofenceRadius, setGeofenceRadius] = useState(50);
  const [simulateOutsideGeofence, setSimulateOutsideGeofence] = useState(false);

  // Student scanning state
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    success: boolean;
    message: string;
    studentName?: string;
    regNo?: string;
    time?: string;
  } | null>(null);

  const availableClasses: ClassSession[] = [
    {
      code: 'CLASS CSC 101',
      title: 'Introduction to Computer Programming',
      lecturer: 'Eng. F. Odero',
      venue: 'Main Campus - Science Lab 2',
      geofenceRadiusMeters: 50,
      scheduledTime: '08:00 AM - 10:00 AM',
      totalEnrolled: 84,
      qrCodeSeed: 'CSC101-SEED',
    },
    {
      code: 'CLASS BCT 202',
      title: 'Data Structures & Algorithms',
      lecturer: 'Dr. A. Rotich',
      venue: 'Lecture Hall 4 (LH4)',
      geofenceRadiusMeters: 30,
      scheduledTime: '10:30 AM - 12:30 PM',
      totalEnrolled: 96,
      qrCodeSeed: 'BCT202-SEED',
    },
    {
      code: 'CLASS AGR 301',
      title: 'Climate-Smart Sustainable Agribusiness',
      lecturer: 'Prof. K. Cheruiyot',
      venue: 'Pavilion Hall A',
      geofenceRadiusMeters: 60,
      scheduledTime: '02:00 PM - 04:00 PM',
      totalEnrolled: 110,
      qrCodeSeed: 'AGR301-SEED',
    },
  ];

  const currentClass = availableClasses[selectedClassIndex];

  // Initial student roster simulating live scans
  const [roster, setRoster] = useState<StudentRecord[]>([
    {
      id: '1',
      regNumber: 'BU/SC/2024/0012',
      name: 'Agabe Kiprotich Ngeywo',
      course: 'BSc. Computer Science',
      department: 'Computing & Informatics',
      timestamp: '08:04:12 AM',
      status: 'present',
      locationVerified: true,
      distanceFromVenueMeters: 8,
    },
    {
      id: '2',
      regNumber: 'BU/SC/2024/0034',
      name: 'Faith Chebet Langat',
      course: 'BSc. Computer Science',
      department: 'Computing & Informatics',
      timestamp: '08:05:45 AM',
      status: 'present',
      locationVerified: true,
      distanceFromVenueMeters: 14,
    },
    {
      id: '3',
      regNumber: 'BU/SC/2024/0078',
      name: 'Emmanuel Kipkoech Bett',
      course: 'BSc. Information Technology',
      department: 'Computing & Informatics',
      timestamp: '08:08:22 AM',
      status: 'present',
      locationVerified: true,
      distanceFromVenueMeters: 19,
    },
    {
      id: '4',
      regNumber: 'BU/AG/2024/0105',
      name: 'Mercy Jerotich',
      course: 'BSc. Agribusiness Management',
      department: 'Agriculture & Agribusiness',
      timestamp: '08:14:50 AM',
      status: 'late',
      locationVerified: true,
      distanceFromVenueMeters: 22,
    },
  ]);

  // Token auto-refresh countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          setQrToken(`BU-${currentClass.code.replace('CLASS ', '')}-${Math.floor(1000 + Math.random() * 9000)}`);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentClass]);

  // Trigger simulated scan from student phone
  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      if (simulateOutsideGeofence) {
        setScanResult({
          success: false,
          message: 'Geofence Verification Failed: Your device is 450m outside approved venue (Main Campus - Science Lab 2). Attendance rejected.',
        });
      } else {
        const newRecord: StudentRecord = {
          id: String(Date.now()),
          regNumber: 'BU/SC/2024/0189',
          name: 'Brian Kiptoo Koech',
          course: 'BSc. Computer Science',
          department: 'Computing & Informatics',
          timestamp: new Date().toLocaleTimeString(),
          status: 'present',
          locationVerified: true,
          distanceFromVenueMeters: Math.floor(5 + Math.random() * 15),
        };

        setRoster((prev) => [newRecord, ...prev]);
        setScanResult({
          success: true,
          message: 'Attendance Recorded Successfully!',
          studentName: 'Brian Kiptoo Koech',
          regNo: 'BU/SC/2024/0189',
          time: newRecord.timestamp,
        });
      }
    }, 1200);
  };

  const handleExportCSV = () => {
    const csvRows = [
      ['Reg Number', 'Full Name', 'Course', 'Timestamp', 'Status', 'Location Verified', 'Distance (m)'],
      ...roster.map((r) => [
        r.regNumber,
        r.name,
        r.course,
        r.timestamp,
        r.status.toUpperCase(),
        r.locationVerified ? 'YES' : 'NO',
        r.distanceFromVenueMeters,
      ]),
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SmartScan_Attendance_${currentClass.code.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="interactive-system" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Interactive System Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Explore THE SYSTEM in Action
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Experience both sides of SMARTSCAN: the Lecturer Real-Time Control Center and the Student Mobile QR Scanner.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-800 p-1.5 rounded-2xl border border-slate-700 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('lecturer')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'lecturer'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Lecturer Dashboard View</span>
            </button>

            <button
              onClick={() => setActiveTab('student')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'student'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Student Mobile Scanner View</span>
            </button>
          </div>
        </div>

        {/* TAB 1: LECTURER DASHBOARD VIEW */}
        {activeTab === 'lecturer' && (
          <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            {/* Top Toolbar */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">
                      Bomet University • Attendance Portal
                    </h3>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
                      LIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Department of Computer Science & Mathematics
                  </p>
                </div>
              </div>

              {/* Class Unit Selector */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700 text-xs">
                  <span className="text-slate-400">Active Unit:</span>
                  <select
                    value={selectedClassIndex}
                    onChange={(e) => setSelectedClassIndex(Number(e.target.value))}
                    className="bg-transparent text-emerald-400 font-bold focus:outline-none cursor-pointer"
                  >
                    {availableClasses.map((cls, idx) => (
                      <option key={cls.code} value={idx} className="bg-slate-900 text-white">
                        {cls.code} - {cls.title}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-emerald-300 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Official Metrics Bar from Poster */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <span className="text-xs text-slate-400 font-medium block">Total Sessions</span>
                <span className="text-3xl font-black text-white font-mono mt-1 block">1,248</span>
                <span className="text-[11px] text-emerald-400 font-medium block mt-1">Across 4 Schools</span>
              </div>
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <span className="text-xs text-slate-400 font-medium block">Total Students</span>
                <span className="text-3xl font-black text-white font-mono mt-1 block">912</span>
                <span className="text-[11px] text-emerald-400 font-medium block mt-1">Active Registration</span>
              </div>
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <span className="text-xs text-slate-400 font-medium block">Attendance Rate</span>
                <span className="text-3xl font-black text-emerald-400 font-mono mt-1 block">73.1%</span>
                <span className="text-[11px] text-slate-400 font-medium block mt-1">Academic Target: 75%</span>
              </div>
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <span className="text-xs text-slate-400 font-medium block">Active Class Scanned</span>
                <span className="text-3xl font-black text-amber-300 font-mono mt-1 block">
                  {roster.length} / {currentClass.totalEnrolled}
                </span>
                <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                  {Math.round((roster.length / currentClass.totalEnrolled) * 100)}% Quorum
                </span>
              </div>
            </div>

            {/* Main Interactive Work Area: Projected QR Display + Live Roster */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Col: Projected Dynamic QR Code (5 Cols) */}
              <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-5 border border-slate-800 text-center flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-3 text-xs">
                  <span className="font-bold text-amber-300 flex items-center gap-1.5">
                    <QrCode className="w-4 h-4" /> PROJECTED SCREEN QR
                  </span>
                  <span className="font-mono text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Refreshes in {secondsRemaining}s
                  </span>
                </div>

                {/* High-contrast QR Container */}
                <div className="bg-white p-5 rounded-2xl shadow-xl border-4 border-emerald-500/80 mb-4 relative">
                  <div className="w-48 h-48 bg-slate-900 rounded-xl p-3 flex items-center justify-center relative overflow-hidden">
                    <div className="grid grid-cols-7 gap-1 w-full h-full p-1 bg-white rounded">
                      {Array.from({ length: 49 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-xs ${
                            (i % 3 === 0 || i % 5 === 0 || i < 7 || i > 41 || i % 7 === 0) && i !== 24
                              ? 'bg-slate-950'
                              : 'bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] font-mono font-bold text-slate-800 tracking-wider">
                    TOKEN: {qrToken}
                  </div>
                </div>

                {/* Session Details */}
                <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 text-left text-xs space-y-1.5 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Class Unit:</span>
                    <span className="font-bold text-white">{currentClass.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Course Title:</span>
                    <span className="font-medium text-emerald-300 truncate max-w-[180px]">
                      {currentClass.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Venue:</span>
                    <span className="font-medium text-slate-300">{currentClass.venue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Geofence Radius:</span>
                    <span className="font-mono text-emerald-400 font-bold">{geofenceRadius}m strictly bound</span>
                  </div>
                </div>

                {/* Test button to switch to student view */}
                <button
                  onClick={() => setActiveTab('student')}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-emerald-200" />
                  <span>Switch to Student Phone to Scan This Code</span>
                </button>
              </div>

              {/* Right Col: Live Synchronized Attendance Ledger (7 Cols) */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>Live Incoming Student Ledger</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Instant sync via encrypted WebSocket channel
                    </p>
                  </div>
                  <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-2.5 py-1 rounded-full font-mono">
                    {roster.length} Checked In
                  </span>
                </div>

                {/* Table of Roster Records */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-800 pb-2 font-mono">
                        <th className="py-2">STUDENT NAME</th>
                        <th className="py-2">REG NO.</th>
                        <th className="py-2">TIME</th>
                        <th className="py-2">GEOFENCE</th>
                        <th className="py-2 text-right">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {roster.map((student) => (
                        <tr key={student.id} className="hover:bg-slate-800/50 transition-colors">
                          <td className="py-2.5 font-bold text-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {student.name}
                          </td>
                          <td className="py-2.5 font-mono text-slate-300">
                            {student.regNumber}
                          </td>
                          <td className="py-2.5 font-mono text-slate-400">
                            {student.timestamp}
                          </td>
                          <td className="py-2.5">
                            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">
                              <MapPin className="w-3 h-3" /> {student.distanceFromVenueMeters}m OK
                            </span>
                          </td>
                          <td className="py-2.5 text-right">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                student.status === 'present'
                                  ? 'bg-emerald-900 text-emerald-200 border border-emerald-700'
                                  : student.status === 'late'
                                  ? 'bg-amber-900 text-amber-200 border border-amber-700'
                                  : 'bg-red-900 text-red-200 border border-red-700'
                              }`}
                            >
                              {student.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Audit Trail Hash: SHA-256 (Tamper-evident)</span>
                  <span className="text-emerald-400 font-bold">100% Paperless</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STUDENT MOBILE SCANNER VIEW */}
        {activeTab === 'student' && (
          <div className="max-w-2xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            {/* Geofence simulation test switch */}
            <div className="mb-6 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300 font-medium">
                  Geofence Test Simulation:
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSimulateOutsideGeofence(false)}
                  className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                    !simulateOutsideGeofence
                      ? 'bg-emerald-700 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Inside Lecture Hall (Pass)
                </button>
                <button
                  onClick={() => setSimulateOutsideGeofence(true)}
                  className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                    simulateOutsideGeofence
                      ? 'bg-red-700 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Outside Campus (Fail)
                </button>
              </div>
            </div>

            {/* Mobile Phone Mockup */}
            <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-3xl p-4 border-4 border-slate-700 shadow-2xl">
              {/* Phone Status Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3 px-2">
                <span className="font-bold text-white">BOMET UNIVERSITY</span>
                <span className="font-mono text-emerald-400">SMARTSCAN APP</span>
              </div>

              {/* Camera Scanner Viewfinder */}
              <div className="relative bg-slate-950 rounded-2xl h-64 border-2 border-emerald-500/60 overflow-hidden flex flex-col items-center justify-center p-4">
                {/* Viewfinder corner brackets */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-400" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-400" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400" />

                {/* Scanning laser animation */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-emerald-400 shadow-[0_0_12px_#34d399] animate-bounce" />
                )}

                <div className="text-center z-10">
                  <QrCode className="w-12 h-12 text-slate-500 mx-auto mb-2 opacity-50" />
                  <p className="text-xs text-slate-300 font-semibold">
                    Point camera at projected session code:
                  </p>
                  <p className="text-xs font-mono font-bold text-amber-300 mt-1">
                    {currentClass.code}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    📍 {currentClass.venue}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button
                  onClick={handleSimulateScan}
                  disabled={isScanning}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isScanning ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying QR & Geofence GPS...</span>
                    </>
                  ) : (
                    <>
                      <QrCode className="w-4 h-4 text-emerald-200" />
                      <span>Scan to Mark Attendance</span>
                    </>
                  )}
                </button>
              </div>

              {/* Scan Result Feedback (Replicating "Attendance Recorded" from the poster!) */}
              {scanResult && (
                <div
                  className={`mt-4 p-4 rounded-2xl border text-center transition-all ${
                    scanResult.success
                      ? 'bg-emerald-950/90 border-emerald-600 text-emerald-100'
                      : 'bg-red-950/90 border-red-600 text-red-100'
                  }`}
                >
                  {scanResult.success ? (
                    <div>
                      {/* Exact Badge from poster: "Attendance Recorded - CLASS CSC 101" */}
                      <div className="bg-emerald-600 text-white py-2 px-4 rounded-xl mb-3 inline-flex items-center justify-center gap-2 shadow-sm w-full">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                        <span className="text-sm font-black tracking-wide uppercase">
                          Attendance Recorded
                        </span>
                      </div>
                      <div className="bg-slate-900/80 rounded-xl p-2.5 border border-emerald-800/80 text-xs">
                        <div className="font-mono font-bold text-emerald-300 text-sm">
                          {currentClass.code}
                        </div>
                        <div className="text-white font-semibold mt-1">
                          {scanResult.studentName}
                        </div>
                        <div className="text-slate-400 font-mono text-[11px]">
                          Reg: {scanResult.regNo}
                        </div>
                        <div className="text-emerald-400 text-[10px] mt-1 font-mono">
                          Timestamp: {scanResult.time} • GPS Verified
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-center gap-1.5 text-red-400 font-bold mb-1 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>Scan Rejected</span>
                      </div>
                      <p className="text-xs text-red-200 leading-relaxed">
                        {scanResult.message}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
