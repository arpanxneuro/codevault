import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

type Problem = {
  id: string;
  title: string;
  path: string;
};

async function getProblemsList(platform: string): Promise<Problem[]> {
  // Adjust the path to be relative to the project root
  const rootPath = path.join(process.cwd(), '..');
  const repoPath = path.join(rootPath, platform.toLowerCase());
  
  try {
    const problems = await fs.readdir(repoPath, { withFileTypes: true });
    return problems
      .filter(dirent => dirent.isDirectory())
      .map(dir => ({
        id: dir.name,
        title: dir.name.split('-').slice(1).join(' ').replace(/([0-9]+)$/, ''),
        path: `/problems/${platform.toLowerCase()}/${dir.name}`,
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error(`Error reading problems from ${platform}:`, error);
    return [];
  }
}

export default async function ProblemList({ params }: { params: { platform: string } }) {
  const problemsList = await getProblemsList(params.platform);

  if (!problemsList.length) {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8 capitalize">{params.platform}</h1>
        <p className="text-gray-600">No problems found for this platform.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">{params.platform} Problems</h1>
      <div className="grid gap-4">
        {problemsList.map((problem) => (
          <Link
            key={problem.id}
            href={problem.path}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold">{problem.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}