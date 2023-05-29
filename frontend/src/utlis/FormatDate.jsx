const FormatDate = ({ date }) => {
  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const dateObj = new Date(date);

    if (dateObj.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (dateObj.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      const month = dateObj.toLocaleString('default', { month: 'short' });
      const day = dateObj.getDate();
      return `${month} ${day}`;
    }
  };
  return <div>{formatDate(date)}</div>;
};

export default FormatDate;
