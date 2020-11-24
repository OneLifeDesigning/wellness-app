export const dateFormat = (date) => {
  !date && new Date();
  const convert = new Date(date);
  const day =
    convert?.getDate() < 10 ? `0${convert?.getDate()}` : convert?.getDate();
  const month =
    convert?.getMonth() + 1 < 10
      ? `0${convert?.getMonth() + 1}`
      : convert?.getMonth() + 1;
  const year = convert?.getFullYear();
  return `${day}/${month}/${year}`;
};

export const groupedByMonthYear = (data) => {
  return data?.reduce((acc, curr) => {
    acc[
      `${new Date(curr?.date).getMonth() + 1}/${new Date(
        curr?.date
      ).getFullYear()}`
    ] = [
      ...(acc[
        `${new Date(curr?.date).getMonth() + 1}/${new Date(
          curr?.date
        ).getFullYear()}`
      ] || []),
      curr,
    ];
    return acc;
  }, {});
};
export const groupedByDay = (data) => {
  return data?.reduce((acc, curr) => {
    acc[dateFormat(curr?.date)] = [
      ...(acc[dateFormat(curr?.date)] || []),
      curr,
    ];
    return acc;
  }, {});
};

export const retrieveSeriesBar = (data) => {
  return (
    data &&
    Object.keys(data)?.map((k, index) => {
      return data[k]?.reduce((acc, curr) => {
        acc = acc + curr.cost;
        return acc;
      }, 0);
    })
  );
};

export const retrieveDateBar = (data) => {
  return (
    data &&
    Object.keys(data)?.map((k) => {
      return k;
    })
  );
};

export const retrieveSeriesLine = (data) => {
  return (
    data &&
    Object.keys(data)?.map((k, index) => {
      return data[k]?.reduce((acc, curr) => {
        acc = acc + curr.cost;
        return round(acc, 2);
      }, 0);
    })
  );
};

export const round = (value, decimals) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};
