const UserAvatar = ({ imageUrl }) => {
  return (
    <div>
      <img
        className="w-28 h-28 rounded-full border-slate-600 border p-1"
        src={imageUrl}
        alt=""
      />
    </div>
  );
};

export default UserAvatar;
