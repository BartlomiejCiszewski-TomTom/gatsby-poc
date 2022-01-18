export default function usersId(req, res) {
  res.status(200).json({ msg: `The id is equal to ${req.body.id}` })
}