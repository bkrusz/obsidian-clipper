import {Options, retrieveOptions} from "./shared";




function setFields(options: Options): void {
	for (const [key, value] of Object.entries(options)) {
		switch (key) {
			case "vaultName":
				let vaultName = document.querySelector("input#vault-name")! as HTMLInputElement;
				vaultName.value = value;
      case "subDirectory":
        let subDirectory = document.querySelector("input#directory-name")! as HTMLInputElement;
        subDirectory.value = value;
		}
	}
}

retrieveOptions().then(setFields);

document.querySelectorAll("input").forEach((node) => {
	node.addEventListener("input", (_: Event) => {
		switch (node.id) {
			case "vault-name":
				browser.storage.local.set({
					'vaultName': node.value
				});
      case "directory-name":
        browser.storage.local.set({
          'subDirectory': node.value
        })
		}
	})
});
