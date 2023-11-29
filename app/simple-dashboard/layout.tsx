import React from 'react';

export default function SimpleDashboardLayut({
  widget1,
  widget2,
}: {
  widget1: React.ReactElement;
  widget2: React.ReactElement;
}) {
  return (
    <>
      <h1>Simple dashboard</h1>

      <h2>Widget1</h2>
      {widget1}
      <h2>Widget2</h2>
      {widget2}
    </>
  );
}
