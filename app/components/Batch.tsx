
import { Heart } from 'lucide-react';

interface BatchProps {
  title: string;
}

const Batch: React.FC<BatchProps> = ({ title }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-6">
      <Heart className="w-4 h-4" />
      {title}
    </div>
  );
};

export default Batch;