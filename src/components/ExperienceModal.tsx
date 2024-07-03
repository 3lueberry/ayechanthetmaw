"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Typography } from "@material-tailwind/react";

interface ExperienceModalProps extends PropsWithChildren<any> {
  title: string;
  location?: string;
  symbol?: any;
  period?: string;
  onClick?: (key: string) => void;
}

export default function ExperienceModal({ title, location, symbol, period, children }: ExperienceModalProps) {
  const router = useRouter();
  const onClose = router.back;

  return (
    <Dialog open={true} handler={onClose} size="lg" className="top-0 max-h-[calc(100vh-8rem)]">
      <DialogHeader className="flex flex-col items-start justify-between">
        <Typography variant="h5" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography color="gray" className="font-normal">
          {location}
        </Typography>
        <Typography variant="small" color="gray" className="italic small-caps font-medium md:-mt-6 self-end">
          {period}
        </Typography>
      </DialogHeader>
      <DialogBody divider className="max-h-[calc(100vh-18rem)] overflow-x-hidden overflow-y-auto font-normal">
        {children}
      </DialogBody>
      <DialogFooter className="px-4 py-1">{""}</DialogFooter>
    </Dialog>
  );
}
