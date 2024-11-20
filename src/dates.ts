export const dayDiff = (d1:Date, d2:Date): number => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000);

export const dayInYear = (d: Date): number => Math.floor((d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);

