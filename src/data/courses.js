import grondfilmer from './grondfilmer.json';

// Cursussen die zijn omgezet naar de Curriculum/Les-structuur.
export const courses = [grondfilmer];
export const getCourse = (slug) => courses.find((c) => c.slug === slug);

// Lessen = modules + (optioneel) de veldgids als naslagles.
export function getLessons(course) {
  const lessons = course.modules.map((m) => ({ ...m, key: String(m.n), kind: 'module' }));
  if (course.veldgids) {
    lessons.push({
      key: 'veldgids', kind: 'reference', n: lessons.length + 1,
      tag: 'Naslag', title: course.veldgids.title, min: course.veldgids.min,
      part: 'Naslag', body: course.veldgids.body,
    });
  }
  return lessons;
}
