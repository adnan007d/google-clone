function Avatar({ url, className }) {
  return (
    <img
      className={`h-10 rounded-full cursor-pointer
      transform hover:scale-110 ${className}
      `}
      src={url}
      alt="Profile Picture"
      loading="lazy"
    />
  );
}

export default Avatar;
