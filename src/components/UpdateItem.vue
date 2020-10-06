<template>
	<div
		class="modal fade additem"
		id="exampleModalCenter"
		tabindex="-1"
		role="dialog"
		aria-labelledby="addtocart-modal"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content mx-auto">
				<div class="modal-header bg-light">
					<h5
						class="modal-title text-dark font-weight-bold"
						id="addtocart-modal"
					>
						Your order
					</h5>
					<button
						type="button"
						class="border-0 close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form class="row">
						<div class="col-lg-7 border-right">
							<div class="input-group">
								<input
									type="text"
									readonly
									class="form-control text-center bg-white font-weight-bold"
									style="color: #028476; border: none"
									placeholder="Username"
									aria-label="Username"
									aria-describedby="basic-addon1"
									value="Cream Cheese Black Winter melon"
								/>
							</div>

							<figure>
								<img
									src="../assets/Images/solo.png"
									alt="product-img"
									class="img img-fluid w-75"
								/>
							</figure>
						</div>
						<div class="col-lg-5">
							<div class="form-group">
								<select class="custom-select" id="inputGroupSelect01">
									<option selected>Size</option>
									<option value="1">16 Oz</option>
									<option value="2">22 Oz</option>
									<option value="3">1 L</option>
								</select>
							</div>
							<div class="form-group">
								<select class="custom-select" id="inputGroupSelect01">
									<option selected>Sugar Level</option>
									<option value="1">25%</option>
									<option value="2">50%</option>
									<option value="3">75%</option>
									<option value="3">100%</option>
								</select>
							</div>
							<div class="form-group">
								<input
									type="number"
									class="form-control"
									placeholder="Quantity"
								/>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Black Pearl<small>(₱15.00)</small></label
								>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Fruit Jelly<small>(₱18.00)</small></label
								>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Nata De Coco<small>(₱22.00)</small></label
								>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Cream Cheese<small>(₱35.00)</small></label
								>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Pink Pearl<small>(₱15.00)</small></label
								>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Coffee Pearl<small>(₱15.00)</small></label
								>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Popping Boba<small>(₱15.00)</small></label
								>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-transparent border-0">
										<input
											type="checkbox"
											aria-label="Checkbox for following text input"
										/>
									</div>
								</div>
								<label class="text-dark my-auto"
									>Crushed Oreo<small>(₱18.00)</small></label
								>
							</div>
							<div class="input-group mt-3">
								<input
									type="submit"
									value="Updae order"
									class="mx-auto w-50 btn btn-sm text-white"
									style="background-color: #028476"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
