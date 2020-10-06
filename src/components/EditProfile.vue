<template>
	<div
		class="modal fade profileeidt"
		id="EditProfilemodal"
		data-backdrop="static"
		data-keyboard="false"
		tabindex="-1"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content w-75 mx-auto">
				<div class="modal-header bg-light">
					<h5 class="modal-title" id="staticBackdropLabel">Edit Account</h5>
					<button
						type="button"
						class="border-0 close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body p-4">
					<form class="p-4">
						<div class="form-group">
							<input
								type="email"
								class="form-control"
								placeholder="Email address"
								id="emailaddress"
							/>
						</div>
						<div class="form-group">
							<input
								type="password"
								class="form-control"
								placeholder="Password"
								id="password"
							/>
						</div>
						<div class="form-group">
							<input
								type="number"
								class="form-control"
								placeholder="Contact Number"
								id="contactnumber"
							/>
						</div>

						<input
							type="submit"
							class="float-right btn btn-sm btn-primary"
							value="Update"
							style="background-color: #028476"
						/>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
