interface MajorCredits {
  credits: number;
  __brand: 'Major'; // Branding to ensure nominal typing
}

interface MinorCredits {
  credits: number;
  __brand: 'Minor'; // Branding to ensure nominal typing
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Minor',
  };
}
