const withBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border-purple-500 border-2 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default withBorder;
