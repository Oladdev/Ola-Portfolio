import type { FC } from "react";
import { BookOpen } from "lucide-react";
import { SectionHeading, Card } from "../ui";
import { BLOG_POSTS } from "../../data/blog";

export const BlogSection: FC = () => {
  return (
    <section
      id="blog"
      className="py-20 px-6 bg-slate-100 dark:bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle>
          <span className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            Ola&apos;s Notes
          </span>
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="block group cursor-default">
              <Card className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {post.excerpt}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
