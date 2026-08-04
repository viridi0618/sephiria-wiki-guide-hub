"use client";

import { useState } from "react";
import Image from "next/image";
import type { ContentVideo } from "@/lib/types";

function extractVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

export default function ArticleVideo({ video }: { video: ContentVideo }) {
  const [activated, setActivated] = useState(false);
  const videoId = extractVideoId(video.youtubeUrl);
  const thumbnailUrl = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <figure className="article-video">
      {videoId && (
        <div
          className={`lite-video${activated ? " lite-video--playing" : ""}`}
        >
          {activated ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {thumbnailUrl && (
                <Image src={thumbnailUrl} alt={video.title} width={480} height={270} loading="lazy" unoptimized />
              )}
              <button
                type="button"
                onClick={() => setActivated(true)}
                aria-label={`Play video: ${video.title}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
      <figcaption className="article-video-body">
        <h3>{video.title}</h3>
        <p className="video-meta">
          <span>{video.channel}</span>
        </p>
        {video.description && <p>{video.description}</p>}
        <a
          className="watch-youtube"
          href={video.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}
