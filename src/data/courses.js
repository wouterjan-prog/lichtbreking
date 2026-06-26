import grondfilmer from './grondfilmer.json';
import vluchtfilmer from './vluchtfilmer.json';

export const courses = [vluchtfilmer, grondfilmer];
export const getCourse = (slug) => courses.find((c) => c.slug === slug);

// Lessen = modules + naslaghoofdstukken (referentie).
export function getLessons(course) {
  const lessons = course.modules.map((m) => ({ ...m, key: String(m.n), kind: 'module' }));
  (course.naslag || []).forEach((r, i) => {
    lessons.push({
      key: r.key, kind: 'reference', n: course.modules.length + i + 1,
      tag: 'Naslaghoofdstuk', title: r.title, min: r.min, part: 'Naslag', body: r.body,
    });
  });
  const offset = course.modules.length + (course.naslag || []).length;
  (course.casestudy || []).forEach((r, i) => {
    lessons.push({
      key: r.key, kind: 'case', n: offset + i + 1,
      tag: 'Praktijkcase · Curaçao', title: r.title, min: r.min, part: 'Praktijkcase', body: r.body,
    });
  });
  return lessons;
}
