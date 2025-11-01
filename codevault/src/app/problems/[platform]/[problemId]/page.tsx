import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ProblemContent from '@/app/components/ProblemContent';

async function loadProblemContent(platform: string, problemId: string) {
  const problemPath = path.join(process.cwd(), '..', '..', platform, problemId);
  
  // Read README.md for problem description
  const readmePath = path.join(problemPath, 'README.md');
  const readmeContent = await fs.readFile(readmePath, 'utf-8');
  const { content } = matter(readmeContent);

  // Read solution file if it exists
  let solution = '';
  try {
    const solutionPath = path.join(problemPath, 'Solution.py');
    solution = await fs.readFile(solutionPath, 'utf-8');
  } catch {
    // Solution file might not exist
  }

  return { content, solution };
}

export default async function ProblemDetail({ 
  params 
}: { 
  params: { platform: string; problemId: string } 
}) {
  const { content, solution } = await loadProblemContent(params.platform, params.problemId);
  const title = params.problemId.split('-').slice(1).join(' ');
  
  return <ProblemContent title={title} content={content} solution={solution} />;
}