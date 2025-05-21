import YouTube from "react-youtube";

const awards = [
  {
    id: "award1",
    title: "International Art Excellence Award",
    year: 2022,
    description:
      "Recognized for outstanding contributions to pencil art and innovative techniques.",
    image: "/award-image.JPG"
  }
  // {
  //   id: "award2",
  //   title: "Creative Visionary Certification",
  //   year: 2021,
  //   description:
  //     "Certified by the Global Art Institute for exceptional creativity and vision.",
  //   image: "/images/certification1.jpg"
  // }
];

const videos = [
  {
    id: "1",
    youtubeId: "dqMk3SjwPh8"
  },
  {
    id: "2",
    youtubeId: "GO68tnVFTp8"
  },
  {
    id: "3",
    youtubeId: "Pv6E6vAlCvE"
  },
  {
    id: "4",
    youtubeId: "Jtn50t4NQlQ"
  }
];

export default function ArtistProfile() {
  const videoOpts = {
    height: "350",
    width: "100%",
    playerVars: {
      autoplay: 0
    }
  };

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-16 text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-black/10  rounded-lg shadow-sm">
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d210eed2c8fc3419da3dabab82686ff6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=a59be09e&x-expires=1748012400&x-signature=D6NHWvi0U1zCmuSUmNnzGcN7Gs4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva"
          className="w-48 h-48 rounded-full object-cover border border-gray-300"
        />
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold mb-4">
            The Journey of Smartist
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            From humble beginnings to becoming a world-renowned pencil artist,
            his dedication, passion, and creativity have earned him numerous
            awards and certifications. Explore his inspiring story,
            achievements, and masterclasses.
          </p>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Awards & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {awards.map(({ id, title, year, description, image }) => (
            <article
              key={id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover object-top"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {title} ({year})
                </h3>
                <p className="text-gray-700">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Videos & Masterclasses
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {videos.map(({ id, youtubeId }) => (
            <div
              key={id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <YouTube
                videoId={youtubeId}
                opts={videoOpts}
                className="rounded-lg overflow-hidden"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="text-center text-gray-700 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Inspired to Create</h2>
        <p className="text-lg leading-relaxed">
          Smartist continues to push the boundaries of pencil art, inspiring
          artists worldwide with his innovative techniques and heartfelt
          storytelling through art. Join the community and see the beauty of
          pencil art.
        </p>
      </section>
    </main>
  );
}
