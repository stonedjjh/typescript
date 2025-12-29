(() => {
  const fullName = (
    firsName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    const fullName = `${firsName} ${lastName || "No last name"}`;
    return upper ? fullName.toUpperCase() : fullName;
  };

  const name = fullName("Tony", "Stark", true);
  console.log({ name });
})();
