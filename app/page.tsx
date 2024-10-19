const hostname = "https://proxyframe.com";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono opacity-70 bg-gray-100 p-1 rounded-md">
      {children}
    </code>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh w-full p-6 gap-6">
      <h1 className="text-4xl font-bold">Proxyframe</h1>
      <div>
        <p className="text-lg max-w-prose">
          {"Use "}
          <Code>{`${hostname}/api?url=<YOUR_URL>`}</Code>
          {" as the "}
          <Code>{"post"}</Code>
          {" action target in your frame."}
        </p>
      </div>
    </div>
  );
}
