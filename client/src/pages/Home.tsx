/*
 * SSC KLA Directory - Home Page
 * Design: Institutional Elegance (Navy & Gold)
 * Layout: Fixed left sidebar (programme + KLA list) | Main content area (coordinator + subjects)
 */

import { useState } from 'react';
import { klaData, type KLA, type ProgrammeKey } from '@/lib/klaData';
import { cn } from '@/lib/utils';
import { Users, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';

const PROGRAMME_COLORS: Record<ProgrammeKey, { bg: string; accent: string; badge: string }> = {
  HKDSE: {
    bg: 'from-[oklch(0.22_0.07_255)] to-[oklch(0.18_0.07_255)]',
    accent: 'text-[oklch(0.72_0.12_75)]',
    badge: 'bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.04_255)]',
  },
  IBDP: {
    bg: 'from-[oklch(0.18_0.07_255)] to-[oklch(0.14_0.05_255)]',
    accent: 'text-[oklch(0.80_0.10_50)]',
    badge: 'bg-[oklch(0.80_0.10_50)] text-[oklch(0.18_0.04_255)]',
  },
};

function TeacherAvatar({ photo, name, size = 'md' }: { photo?: string; name: string; size?: 'sm' | 'md' | 'lg' }) {
  const [imgError, setImgError] = useState(false);
  const initials = name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(-2).map(w => w[0]).join('');
  
  const sizeClass = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-24 h-24 text-xl',
  }[size];

  if (photo && !imgError) {
    return (
      <img
        src={photo}
        alt={name}
        onError={() => setImgError(true)}
        className={cn(
          sizeClass,
          'rounded-full object-cover object-top flex-shrink-0',
          'ring-2 ring-[oklch(0.72_0.12_75)] ring-offset-1'
        )}
      />
    );
  }

  return (
    <div className={cn(
      sizeClass,
      'rounded-full flex-shrink-0 flex items-center justify-center font-semibold',
      'bg-[oklch(0.30_0.07_255)] text-[oklch(0.85_0.05_75)]',
      'ring-2 ring-[oklch(0.72_0.12_75)] ring-offset-1'
    )}>
      {initials || '?'}
    </div>
  );
}

function CoordinatorCard({ kla, programme }: { kla: KLA; programme: ProgrammeKey }) {
  const colors = PROGRAMME_COLORS[programme];
  if (!kla.coordinator) return null;

  return (
    <div className={cn(
      'rounded-xl overflow-hidden shadow-lg mb-6',
      'bg-gradient-to-br', colors.bg
    )}>
      <div className="p-6 flex items-center gap-5">
        <TeacherAvatar photo={kla.coordinatorPhoto} name={kla.coordinator} size="lg" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={cn('text-xs font-semibold uppercase tracking-widest', colors.accent)}>
              {kla.coordinatorTitle || 'KLA Coordinator'}
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white leading-tight">
            {kla.coordinator}
          </h2>
          <p className="text-white/70 text-sm mt-1 font-['Source_Sans_3']">{kla.name}</p>
        </div>
        <div className={cn('px-3 py-1 rounded-full text-xs font-bold tracking-wide', colors.badge)}>
          {programme}
        </div>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75)] to-transparent opacity-60" />
    </div>
  );
}

function SubjectSection({ kla }: { kla: KLA }) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(
    kla.subjects.length === 1 ? kla.subjects[0].name : null
  );

  return (
    <div className="space-y-3">
      {kla.subjects.map((subject) => {
        const isExpanded = expandedSubject === subject.name;
        return (
          <div
            key={subject.name}
            className="rounded-lg border border-[oklch(0.88_0.02_80)] bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setExpandedSubject(isExpanded ? null : subject.name)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[oklch(0.97_0.01_80)] transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[oklch(0.50_0.07_255)] flex-shrink-0" />
                <span className="font-['Playfair_Display'] font-semibold text-[oklch(0.22_0.07_255)] text-base">
                  {subject.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[oklch(0.55_0.04_255)] font-['Source_Sans_3']">
                  {subject.teachers.length} teacher{subject.teachers.length !== 1 ? 's' : ''}
                </span>
                <ChevronRight className={cn(
                  'w-4 h-4 text-[oklch(0.55_0.04_255)] transition-transform duration-200',
                  isExpanded && 'rotate-90'
                )} />
              </div>
            </button>

            {isExpanded && (
              <div className="px-5 pb-5 pt-1 border-t border-[oklch(0.92_0.01_80)]">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3">
                  {subject.teachers.map((teacher) => (
                    <div
                      key={teacher.name}
                      className="flex flex-col items-center text-center gap-2 p-3 rounded-lg bg-[oklch(0.97_0.01_80)] hover:bg-[oklch(0.93_0.02_80)] transition-colors"
                    >
                      <TeacherAvatar photo={teacher.photo} name={teacher.name} size="md" />
                      <div>
                        <p className="text-xs font-semibold text-[oklch(0.22_0.07_255)] leading-tight font-['Source_Sans_3']">
                          {teacher.name}
                        </p>
                        {teacher.role && (
                          <p className="text-[10px] text-[oklch(0.55_0.04_255)] mt-0.5 font-['Source_Sans_3']">
                            {teacher.role}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [activeProgram, setActiveProgram] = useState<ProgrammeKey>('HKDSE');
  const [activeKlaId, setActiveKlaId] = useState<string>(klaData.HKDSE.klas[0].id);

  const programme = klaData[activeProgram];
  const activeKla = programme.klas.find(k => k.id === activeKlaId) || programme.klas[0];

  const handleProgramChange = (prog: ProgrammeKey) => {
    setActiveProgram(prog);
    setActiveKlaId(klaData[prog].klas[0].id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.01_80)]">
      {/* Header */}
      <header className="bg-[oklch(0.22_0.07_255)] shadow-xl">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[oklch(0.18_0.04_255)]" />
            </div>
            <div>
              <h1 className="font-['Playfair_Display'] text-white font-bold text-lg leading-tight">
                St Stephen's College
              </h1>
              <p className="text-[oklch(0.72_0.12_75)] text-xs font-['Source_Sans_3'] tracking-wide">
                KLA Academic Directory 2025–2026
              </p>
            </div>
          </div>
          <div className="ml-auto h-0.5 w-24 bg-gradient-to-r from-[oklch(0.72_0.12_75)] to-transparent" />
        </div>
      </header>

      <div className="flex flex-1 max-w-[1400px] mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-72 flex-shrink-0 bg-[oklch(0.22_0.07_255)] min-h-full flex flex-col shadow-xl">
          {/* Programme Tabs */}
          <div className="p-4 border-b border-[oklch(0.30_0.07_255)]">
            <p className="text-[oklch(0.60_0.05_255)] text-[10px] uppercase tracking-widest font-['Source_Sans_3'] mb-3 px-1">
              Programme
            </p>
            <div className="flex gap-2">
              {(['HKDSE', 'IBDP'] as ProgrammeKey[]).map((prog) => (
                <button
                  key={prog}
                  onClick={() => handleProgramChange(prog)}
                  className={cn(
                    'flex-1 py-2.5 rounded-lg text-sm font-bold font-["Source_Sans_3"] transition-all duration-200',
                    activeProgram === prog
                      ? 'bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.04_255)] shadow-md'
                      : 'text-[oklch(0.70_0.05_255)] hover:bg-[oklch(0.30_0.07_255)] hover:text-white'
                  )}
                >
                  {prog}
                </button>
              ))}
            </div>
          </div>

          {/* KLA List */}
          <div className="flex-1 overflow-y-auto py-3">
            <p className="text-[oklch(0.60_0.05_255)] text-[10px] uppercase tracking-widest font-['Source_Sans_3'] mb-2 px-5">
              Key Learning Areas
            </p>
            <nav className="space-y-0.5 px-3">
              {programme.klas.map((kla) => (
                <button
                  key={kla.id}
                  onClick={() => setActiveKlaId(kla.id)}
                  className={cn(
                    'w-full text-left px-3 py-3 rounded-lg transition-all duration-200 group',
                    activeKlaId === kla.id
                      ? 'bg-[oklch(0.72_0.12_75)]/20 border-l-2 border-[oklch(0.72_0.12_75)]'
                      : 'hover:bg-[oklch(0.30_0.07_255)] border-l-2 border-transparent'
                  )}
                >
                  <div className="flex items-start gap-2.5">
                    <Users className={cn(
                      'w-3.5 h-3.5 mt-0.5 flex-shrink-0 transition-colors',
                      activeKlaId === kla.id ? 'text-[oklch(0.72_0.12_75)]' : 'text-[oklch(0.55_0.05_255)] group-hover:text-[oklch(0.70_0.05_255)]'
                    )} />
                    <div className="min-w-0">
                      <p className={cn(
                        'text-sm font-medium leading-tight transition-colors',
                        activeKlaId === kla.id ? 'text-[oklch(0.72_0.12_75)]' : 'text-[oklch(0.80_0.03_255)] group-hover:text-white'
                      )}>
                        {kla.name}
                      </p>
                      {kla.coordinator && (
                        <p className="text-[10px] text-[oklch(0.55_0.05_255)] mt-0.5 truncate font-['Source_Sans_3']">
                          {kla.coordinator}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[oklch(0.30_0.07_255)]">
            <p className="text-[oklch(0.45_0.04_255)] text-[10px] text-center font-['Source_Sans_3']">
              © 2025–2026 St Stephen's College
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* KLA Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-[oklch(0.55_0.04_255)] text-xs font-['Source_Sans_3'] mb-2">
              <span>{activeProgram}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[oklch(0.35_0.06_255)]">{activeKla.name}</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[oklch(0.22_0.07_255)] leading-tight">
              {activeKla.name}
            </h1>
            <div className="h-0.5 w-16 bg-[oklch(0.72_0.12_75)] mt-3" />
          </div>

          {/* Coordinator Card */}
          <CoordinatorCard kla={activeKla} programme={activeProgram} />

          {/* Subjects */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[oklch(0.50_0.07_255)]" />
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[oklch(0.22_0.07_255)]">
                Subjects & Teachers
              </h3>
              <span className="ml-auto text-xs text-[oklch(0.55_0.04_255)] font-['Source_Sans_3']">
                {activeKla.subjects.length} subject{activeKla.subjects.length !== 1 ? 's' : ''}
              </span>
            </div>
            <SubjectSection kla={activeKla} />
          </div>
        </main>
      </div>
    </div>
  );
}
