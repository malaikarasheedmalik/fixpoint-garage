import data from "@/data/fixpoint-data.json";

export default function GoogleMap({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const heightClass =
    variant === "compact"
      ? "h-64 sm:h-80 lg:h-full min-h-[16rem]"
      : "h-72 sm:h-96";

  return (
    <div className={`w-full ${heightClass} rounded-2xl overflow-hidden border border-beige shadow-soft`}>
      <iframe
        src={data.business.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="FixPoint Garage location"
        className="w-full h-full"
      />
    </div>
  );
}
