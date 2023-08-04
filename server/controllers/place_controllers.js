import Place from "../models/place.js";

export const getPlace = async (req, res) => {
  try {
    const { point_id } = req.params;
    const place = await Place.findOne(
      { point_id },
      "name description imageSrc imageAlt"
    );
    res.status(200).json({ success: true, place });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};

export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find({}, "name point_id node_id");
    res.status(200).json({ success: true, places });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
}
