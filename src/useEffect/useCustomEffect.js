import React, { useState, useEffect } from "react";

export const useCustomEffect = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((resp) => resp.text())
      .then((data) => {
        setState({ data: data, loading: false });
        console.log(data);
      });
  }, [url]);

  return state;
};
