const inputs = document.querySelectorAll("input, textarea, select");
      inputs.forEach((input) =>
        input.addEventListener("input", updateSignature)
      );

      function addTitle() {
        const container = document.getElementById("titlesContainer");
        const div = document.createElement("div");
        div.className = "title-group";
        div.innerHTML =
          '<input type="text" class="titleInput"><button onclick="this.parentNode.remove(); updateSignature();">–</button>';
        container.appendChild(div);
        div.querySelector("input").addEventListener("input", updateSignature);
      }

      function updateSignature() {
        const fullName =
          document.getElementById("fullName").value || "Mister Sparky";
        const titles = [...document.querySelectorAll(".titleInput")]
          .map((el) => el.value)
          .filter(Boolean)
          .join("<br>");
        const department = document.getElementById("department").value;
        const organization = document.getElementById("organization").value;
        const officePhone = document.getElementById("officePhone").value;
        const mobilePhone = document.getElementById("mobilePhone").value;
        const fax = document.getElementById("fax").value;
        const email =
          document.getElementById("email").value || "sparky@asuep.org";
        const website = document.getElementById("website").value;
        const addr1 = document.getElementById("addr1").value || "PO Box 2260";
        const addr2 = document.getElementById("addr2").value || "Tempe, AZ";
        const addr3 = document.getElementById("addr3").value || "85280-2260";
        const slogan =
          document.getElementById("slogan").value ||
          "Changing Futures: From Arizona. For the world.";
        const custom = document.getElementById("custom").value;

        const brandColor = "#8c1d40";

        const html = `
<p style="padding: 0; margin: 0; font-size:8pt;"><b>${fullName}</b></p>
<p style="padding: 0; margin: 0; font-size:8pt;">${titles}</p>
<p style="padding: 0; margin: 0; font-size:8pt;">${department}</p>
<p style="padding: 0; margin: 0; font-size:8pt;"><b>${organization}</b></p>
${
  officePhone
    ? `<p style="padding: 0; margin: 0; font-size:8pt;"><b>o:</b> <a href="tel:${officePhone}" style="color: ${brandColor}; font-size:8pt; line-height: .8;">${officePhone}</a>&nbsp;`
    : ""
}
${
  mobilePhone
    ? `<b style="font-size:8pt; line-height: .8;">c:</b> <a href="tel:${mobilePhone}" style="color: ${brandColor}; font-size:8pt; line-height: .8;">${mobilePhone}</a>&nbsp;`
    : ""
}
${
  fax
    ? `<b style="font-size:8pt; line-height: .8;">f:</b> <a href="tel:${fax}" style="color: ${brandColor}; font-size:8pt; line-height: .8;">${fax}</a></p>`
    : ""
}
<p style="padding: 0; margin: 0; font-size:8pt;"><b>email:</b> <a href="mailto:${email}" style="color:${brandColor};">${email}</a></p>
<p style="padding: 0; margin: 0; font-size:8pt;"><b>website:</b> <a href="https://${website}" style="color:${brandColor}; font-size:8pt; line-height: .8;"">${website}</a></p>
<p style="padding: 0; margin: 0; font-size:8pt;">${addr1} | ${addr2} | ${addr3}</p>
<p style="padding: 0; margin: 0; font-size:8pt;"><span class="highlight">${slogan}</span></p>
<p style="padding: 0; margin: 0; font-size:8pt;">${custom}</p>
    `.trim();

        document.getElementById("signatureOutput").innerHTML = html;
        // console.log(html);

        // document.getElementById("htmlOutput").textContent = html;
      }

      function copyHTML() {
        // const html = document.getElementById("htmlOutput").textContent;
        navigator.clipboard.writeText(html).then(() => {
          alert("Signature HTML copied to clipboard!");
        });
      }

      // Init preview
      updateSignature();

      function copySignatureHTML() {
        const signature = document.getElementById("signatureOutput");
        // console.log(signature);
        const range = document.createRange();
        range.selectNode(signature);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
          const success = document.execCommand("copy");
          if (success)
            alert("Your signature has been copied to the clipboard!");
          else alert("Copy failed. Please try manually.");
        } catch (err) {
          alert("Error copying signature.");
        }
        selection.removeAllRanges();
        console.log(signature);
      }