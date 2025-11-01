import ReactMarkdown from 'react-markdown';

interface ProblemContentProps {
  title: string;
  content: string;
  solution?: string;
}

export default function ProblemContent({ title, content, solution }: ProblemContentProps) {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      
      <div className="prose prose-lg max-w-none mb-8">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {solution && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="language-python">{solution}</code>
          </pre>
        </div>
      )}
    </div>
  );
}