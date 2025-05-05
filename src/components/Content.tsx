import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { QRCodeSVG } from "qrcode.react";
import { toSvg } from "html-to-image";
import { saveAs } from "file-saver";
import { Slider } from "./ui/slider";

export default function Content() {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(128);

  const qrRef = useRef<HTMLDivElement>(null);

  const download = () => {
    if (qrRef.current === null) return;

    toSvg(qrRef.current, { skipFonts: true }).then((dataUrl) => {
      saveAs(dataUrl, "qrcode.png");
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="px-4 col-span-2">
        <h1 className="text-xl">Paste URL</h1>
        <Input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          name="url"
          placeholder="Paste URL to generate QR Code"
        />

        <div>
          Size
          <Slider
            value={[size]}
            min={128}
            max={300}
            onValueChange={(value) => {
              setSize(value[0]);
            }}
            className="mt-4"
          />
        </div>

        <div className="grid grid-cols-2 w-full gap-4">
          <Button onClick={download}>Download as SVG</Button>
          <Button onClick={download}>Download as PNG</Button>
        </div>
      </Card>
      <Card className="px-6 text-center">
        <div
          className={cn(
            "bg-white items-center flex justify-center rounded-md aspect-square",
            url ? "" : "blur-md"
          )}
          ref={qrRef}
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <QRCodeSVG value={url} size={size} />
        </div>
      </Card>
    </div>
  );
}
