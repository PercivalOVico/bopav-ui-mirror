
interface WalletHeaderProps {
  title: string;
  description: string;
}

export function WalletHeader({ title, description }: WalletHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
