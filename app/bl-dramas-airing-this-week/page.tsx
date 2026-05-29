export const metadata = {
  title: "BL Dramas Airing This Week: May 28–June 3, 2026",
  description:
    "Find BL dramas airing this week from May 28 to June 3, 2026, including episode schedules, platforms, and where to watch ongoing BL series legally.",
};

const schedule = [
  {
    date: "Thursday, May 28, 2026",
    day: "Thu",
    title: "Wishing Upon",
    episode: "Episode 11",
    platform: "GagaOOLala, iQIYI, Viki",
    country: "International",
    mood: "Romantic",
  },
  {
    date: "Friday, May 29, 2026",
    day: "Fri",
    title: "Love Of Silom",
    episode: "Episode 7",
    platform: "WeTV",
    country: "Thailand",
    mood: "Drama",
  },
  {
    date: "Friday, May 29, 2026",
    day: "Fri",
    title: "Love Upon A Time",
    episode: "Episode 10",
    platform: "iQIYI",
    country: "Thailand",
    mood: "Fantasy",
  },
  {
    date: "Saturday, May 30, 2026",
    day: "Sat",
    title: "Flower Boy",
    episode: "Episode 6",
    platform: "GagaOOLala",
    country: "International",
    mood: "Soft",
  },
  {
    date: "Tuesday, June 2, 2026",
    day: "Tue",
    title: "Unexpectedly Naughty",
    episode: "Episode 9",
    platform: "GagaOOLala",
    country: "International",
    mood: "Comedy",
  },
  {
    date: "Tuesday, June 2, 2026",
    day: "Tue",
    title: "Magic Move",
    episode: "Episode 7",
    platform: "iQIYI",
    country: "International",
    mood: "Fantasy",
  },
];

const platforms = [
  "GagaOOLala",
  "iQIYI",
  "Viki",
  "WeTV",
];

export default function AiringThisWeekPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <section className="relative overflow-hidden">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-pink-300 opacity-30 blur-3xl" />
        <div className="absolute right-10 top-24 h-40 w-40 rounded-full bg-purple-400 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-40 rounded-full bg-indigo-300 opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-purple-100">
              Weekly BL Schedule
            </span>

            <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              BL Dramas Airing This Week
            </h1>

            <p className="mb-3 text-xl font-semibold text-purple-700">
              May 28 – June 3, 2026
            </p>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-700">
              Track new BL episodes airing this week, including episode numbers,
              platforms, moods, and quick watchlist notes.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#schedule"
                className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
              >
                View Schedule
              </a>

              <a
                href="#platforms"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-purple-100 transition hover:bg-purple-50"
              >
                Browse by Platform
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-pink-100">
            <p className="text-sm font-medium text-gray-500">This Week</p>
            <p className="mt-2 text-3xl font-extrabold text-pink-600">
              {schedule.length}
            </p>
            <p className="mt-1 text-sm text-gray-600">new BL episodes</p>
          </div>

          <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-purple-100">
            <p className="text-sm font-medium text-gray-500">Platforms</p>
            <p className="mt-2 text-3xl font-extrabold text-purple-600">
              {platforms.length}
            </p>
            <p className="mt-1 text-sm text-gray-600">streaming options</p>
          </div>

          <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-indigo-100">
            <p className="text-sm font-medium text-gray-500">Best For</p>
            <p className="mt-2 text-3xl font-extrabold text-indigo-600">
              Fans
            </p>
            <p className="mt-1 text-sm text-gray-600">tracking weekly BLs</p>
          </div>

          <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-fuchsia-100">
            <p className="text-sm font-medium text-gray-500">Updated</p>
            <p className="mt-2 text-3xl font-extrabold text-fuchsia-600">
              Weekly
            </p>
            <p className="mt-1 text-sm text-gray-600">for fresh episodes</p>
          </div>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
              Quick View
            </p>
            <h2 className="mt-1 text-3xl font-bold text-gray-950">
              Weekly Episode Schedule
            </h2>
          </div>

          <p className="text-sm text-gray-600">
            Save this page and check back every week.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-purple-100 ring-1 ring-purple-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                  <th className="p-4">Date</th>
                  <th className="p-4">BL Drama</th>
                  <th className="p-4">Episode</th>
                  <th className="p-4">Platform</th>
                  <th className="p-4">Mood</th>
                </tr>
              </thead>

              <tbody>
                {schedule.map((item, index) => (
                  <tr
                    key={`${item.title}-${item.episode}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-purple-50/50"}
                  >
                    <td className="p-4 font-medium text-gray-700">
                      {item.date}
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-gray-950">
                        {item.title}
                      </span>
                      <p className="mt-1 text-xs text-gray-500">
                        {item.country}
                      </p>
                    </td>
                    <td className="p-4 text-gray-700">{item.episode}</td>
                    <td className="p-4 text-gray-700">{item.platform}</td>
                    <td className="p-4">
                      <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
                        {item.mood}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
            Episode Cards
          </p>
          <h2 className="mt-1 text-3xl font-bold text-gray-950">
            This Week’s BL Episodes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {schedule.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-purple-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-purple-600">
                    {item.date}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-gray-950">
                    {item.title}
                  </h3>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 px-4 py-3 text-center text-white shadow-md">
                  <p className="text-xs font-semibold">{item.day}</p>
                  <p className="text-lg font-black">
                    {item.episode.replace("Episode ", "EP")}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  Ongoing
                </span>

                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
                  {item.mood}
                </span>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {item.country}
                </span>
              </div>

              <p className="mb-4 text-gray-700">
                <strong>{item.title}</strong> continues this week with{" "}
                <strong>{item.episode}</strong>. Check the official platform for
                regional availability and subtitle options.
              </p>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-500">
                  Available on
                </p>
                <p className="mt-1 font-bold text-gray-950">{item.platform}</p>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Watchlist Coming Soon
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="platforms" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 p-8 text-white shadow-xl shadow-purple-200">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-100">
            Browse by Platform
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            BL Episodes This Week by Platform
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="rounded-2xl bg-white/15 p-5 backdrop-blur"
              >
                <p className="text-xl font-bold">{platform}</p>

                <p className="mt-2 text-sm text-purple-50">
                  {
                    schedule.filter((item) =>
                      item.platform.toLowerCase().includes(platform.toLowerCase())
                    ).length
                  }{" "}
                  episode(s) this week
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-pink-100 ring-1 ring-pink-100">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
                Weekly Updates
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                Never miss a new BL episode
              </h2>

              <p className="mt-3 text-gray-700">
                Get weekly BL schedules, upcoming releases, legal watch links,
                and hand-picked recommendations.
              </p>
            </div>

            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-2xl border border-gray-300 px-5 py-4 outline-none ring-purple-200 transition focus:ring-4"
              />

              <button
                type="button"
                className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:opacity-90"
              >
                Send Me Updates
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}