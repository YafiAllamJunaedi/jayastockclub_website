import Card from "../components/Card.jsx"
const Gallery = () => {
  return (
    <div className="w-full min-h-[75vh] p-10">
      <p className="text-[#003835] text-3xl md:text-4xl font-bold text-center">
        GALLERY
      </p>

      <div className="pt-7 grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-5">
        <Card
          date="17 Agustus 1945"
          location="Pamulang, UAE"
          title="Juara 1 lomba balap karung di Standford University"
        />
        <Card
          date="17 Agustus 1945"
          location="Pamulang, UAE"
          title="Juara 1 lomba balap karung di Standford University"
        />
        <Card
          date="17 Agustus 1945"
          location="Pamulang, UAE"
          title="Juara 1 lomba balap karung di Standford University"
        />
        <Card
          date="17 Agustus 1945"
          location="Pamulang, UAE"
          title="Juara 1 lomba balap karung di Standford University"
        />
        <Card
          date="17 Agustus 1945"
          location="Pamulang, UAE"
          title="Juara 1 lomba balap karung di Standford University"
        />
        <Card
          date="17 Agustus 1945"
          location="Pamulang, UAE"
          title="Juara 1 lomba balap karung di Standford University"
        />
        <Card
          date="17 Agustus 1945"
          location="Pamulang, UAE"
          title="Juara 1 lomba balap karung di Standford University"
        />
      </div>

      <p className="mt-6 text-[#003835] text-lg font-semibold cursor-pointer block md:hidden text-center">
        see more
      </p>
    </div>
  )
}

export default Gallery
