<template>
	<div
		class="modal fade"
		id="Loginmodal"
		data-backdrop="static"
		data-keyboard="false"
		tabindex="-1"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content w-75 mx-auto">
				<div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">Hi there!</h5>
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
							<small class="d-flex justify-content-end"
								><a class="text-secondary">forgot password?</a></small
							>
						</div>

						<input
							type="submit"
							class="float-right btn btn-sm btn-primary"
							value="Login"
							style="background-color: #028476"
						/>
					</form>
				</div>
				<div class="modal-footer d-flex justify-content-center">
					<button
						type="button"
						class="btn text-white text-left w-75"
						style="background-color: #4267b2"
					>
						<i class="fab fa-facebook-square mr-1"></i>Sign-in with Facebook
					</button>
					<button
						type="button"
						class="btn text-white text-left w-75"
						style="background-color: #db4437"
					>
						<i class="fab fa-google-plus mr-1"></i>Sign-in with Google
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
