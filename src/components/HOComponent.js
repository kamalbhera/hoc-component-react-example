const WithLoading = (Component) => {
    return function WihLoadingComponent({ isLoading, ...props }) {
      if (!isLoading) return <Component {...props} />;
      return <p>Please wait, fetching your data in no time...</p>;
    };
  }
export default WithLoading;
  