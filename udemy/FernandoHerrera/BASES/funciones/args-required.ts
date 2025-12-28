(() => {
  const fullName = (firsName: string, lastName: string): string => {
    return `${firsName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");
  console.log({ name });
})();
