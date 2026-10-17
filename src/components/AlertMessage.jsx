/**
 * AlertMessage component
 * type: 'success' | 'error'
 */
export default function AlertMessage({ type, message }) {
  if (!message) return null;

  const style = {
    display: 'block',
    padding: '12px 16px',
    borderRadius: '6px',
    background: type === 'error' ? '#fdecea' : '#e7f6ec',
    color: type === 'error' ? '#b71c1c' : '#1b5e20',
    border: `1px solid ${type === 'error' ? '#f5c6cb' : '#c3e6cb'}`,
    marginBottom: '16px',
  };

  return <div style={style}>{message}</div>;
}
