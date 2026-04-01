import { Video, Sparkles, Zap, TrendingUp, ExternalLink } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  url: string;
  gradient: string;
}

const tools: Tool[] = [
  {
    name: '可灵',
    description: '国产AI视频生成领军者，文本秒变高质量视频',
    tags: ['影视级', '中文优化', '快速生成'],
    icon: Sparkles,
    url: 'https://klingai.com',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Runway',
    description: '好莱坞级AI视频工具，创意人士首选',
    tags: ['影视级', '多模态', '专业工具'],
    icon: Video,
    url: 'https://runwayml.com',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Pika',
    description: '一键成片的AI视频魔法师，操作简单效果惊艳',
    tags: ['一键成片', '易上手', '创意无限'],
    icon: Zap,
    url: 'https://pika.art',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    name: 'AppGrowing',
    description: '广告创意灵感库，AI驱动的营销素材分析平台',
    tags: ['营销洞察', '素材库', '数据分析'],
    icon: TrendingUp,
    url: 'https://appgrowing.cn',
    gradient: 'from-blue-500 to-cyan-600'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            AI视频工具导航
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            精选最强AI视频生成工具，让创意触手可及
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.gradient}`}></div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">
                      {tool.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${tool.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    立即体验
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm">
            探索AI视频创作的无限可能
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
