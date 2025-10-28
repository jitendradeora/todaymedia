import { videos } from '../data/videos';
import Header from './Header';
import Footer from './Footer';
import { Play, Eye, Clock, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useState } from 'react';

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">الفيديو</h1>
          <p className="text-gray-600">
            {videos.length} فيديو متاح
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
              <div className="relative overflow-hidden rounded-lg mb-3">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#c90000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white mr-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-1 rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>
              <Badge variant="secondary" className="mb-2">{video.category}</Badge>
              <h3 className="mb-2 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Video Popup */}
      <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl w-full p-0" aria-describedby="video-description">
          <DialogHeader>
            <DialogTitle className="sr-only">
              {selectedVideo ? videos.find(v => v.id === selectedVideo)?.title : 'مشاهدة الفيديو'}
            </DialogTitle>
            <DialogDescription className="sr-only" id="video-description">
              {selectedVideo ? `فيديو: ${videos.find(v => v.id === selectedVideo)?.title}` : 'مشغل الفيديو'}
            </DialogDescription>
          </DialogHeader>
          {selectedVideo && (
            <div className="relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={videos.find(v => v.id === selectedVideo)?.youtubeUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-background">
                <h2 className="text-2xl mb-2">{videos.find(v => v.id === selectedVideo)?.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{videos.find(v => v.id === selectedVideo)?.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{videos.find(v => v.id === selectedVideo)?.date}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
}