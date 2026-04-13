import FeatureCard from "@/components/Card";

export default function DaftarPopuler() {
  const features = [
    {
      title: "kajian mbah gupron",
      description: "yg pasti nya sesat dan menyimpang dari ajaran islam",
    },
    {
      title: "ustadz ahmad sarwat",
      description: "kajian untuk muhamadiah",
    },
    {
      title: "ustad abdul somad",
      description: "Engga usah di jelasin lah, udah pada tau kan",
    },
    {
      title: "ustadz rendy suherman",
      description: "tukang ngeloco naik haji",
    }
  ];

  return (
    <div id="terbaru" className="px-6 py-16 max-w-6xl mx-auto text-left">
      <h2 className="text-3xl font-bold text-slate-900 mb-12">
        Daftar Populer
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
